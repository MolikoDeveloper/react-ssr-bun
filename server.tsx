import * as path from 'path';
import { statSync, existsSync, readFileSync } from 'fs';
import { renderToReadableStream } from 'react-dom/server';
import Security from './Security';
import { rm } from 'node:fs/promises'
import { StaticRouter } from 'react-router-dom/server';

const PROJECT_ROOT = import.meta.dir;
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, 'public');
const BUILD_DIR = path.resolve(PROJECT_ROOT, '.build');
const BUILD_PAGE_DIR = path.resolve(BUILD_DIR, 'pages');
const PAGE_DIR = path.resolve(PROJECT_ROOT, 'pages');

const srcRouter = new Bun.FileSystemRouter({
    dir: PAGE_DIR,
    style: 'nextjs',
});


await rm(BUILD_DIR, {
    recursive: true,
    force: true,
})

await Bun.build({
    entrypoints: [path.join(PROJECT_ROOT, 'hydrate.tsx'), ...Object.values(srcRouter.routes)],
    outdir: BUILD_DIR,
    target: 'browser',
    splitting: true,
    naming: {
        entry: "[dir]/[name].[ext]",
        chunk: "[name]-[hash].[ext]",
        asset: "[name]-[hash].[ext]"
    },
    minify: {
        identifiers: true,
        syntax: true,
        whitespace: true
    },
}).catch(e => console.error('ERROR on build: ' + e));

const buildRouter = new Bun.FileSystemRouter({
    dir: path.join(BUILD_DIR, 'pages'),
    style: 'nextjs',
});

function serveFromDir(config: {
    directory: string;
    path: string;
    From: string;
}): Response | null {
    const basePath = path.join(config.directory, config.path);

    if (existsSync(basePath)) {
        try {
            const stat = statSync(basePath);
            if (stat && stat.isFile()) {
                const fileContent = readFileSync(basePath);
                return new Response(fileContent, {
                    headers: { 'Content-Type': getContentType(basePath) },
                });
            }
        } catch (err) {
            console.log({ config, err });
        }
    }

    return null;
}

function getContentType(filePath: string) {
    const ext = path.extname(filePath);
    switch (ext) {
        case '.html':
            return 'text/html; charset=utf-8';
        case '.js':
            return 'application/javascript; charset=utf-8';
        case '.css':
            return 'text/css; charset=utf-8';
        case '.json':
            return 'application/json; charset=utf-8';
        case '.png':
            return 'image/png';
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
}

const host = Bun.serve({
    async fetch(request, server) {
        await Security(request, server);
        if (server.upgrade(request)) return;

        try {
            let reqPath = new URL(request.url).pathname;

            const headers = new Headers();
            headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self';");
            headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
            headers.set('X-Content-Type-Options', 'nosniff');
            headers.set('X-Frame-Options', 'DENY');
            headers.set('X-XSS-Protection', '1; mode=block');

            const match = srcRouter.match(request);

            if (match) {
                const builtMatch = buildRouter.match(request);
                if (!builtMatch) {
                    return new Response('Error 500', { status: 500, headers });
                }

                const GetCookie = (name: string) => {
                    return request.headers.get('cookie')?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || undefined;
                }

                /*
                if (!GetCookie('Session')) {
                
                    return Response.redirect('/login')
                    headers.set('Set-Cookie', `Session=server`);
                }
                */

                const Component = await import(match.filePath);
                const stream = await renderToReadableStream(<StaticRouter location={reqPath}><Component.default /></StaticRouter>, {
                    bootstrapScriptContent: `globalThis.PATH_TO_PAGE = "/${builtMatch.src}";`,
                    bootstrapModules: ['/hydrate.js'],
                });

                headers.delete('Content-Security-Policy')
                headers.set('Content-Type', 'text/html; charset=utf-8');
                return new Response(stream, { status: 200, headers });
            }

            if (reqPath === '/') reqPath = '/index.html';

            const publicResponse = serveFromDir({
                directory: PUBLIC_DIR,
                path: reqPath,
                From: 'PublicResponse'
            });

            if (publicResponse) return publicResponse;

            const buildResponse = serveFromDir({
                directory: BUILD_DIR,
                path: reqPath,
                From: "buildResponse"
            });
            if (buildResponse) return buildResponse;

            const pagesResponse = serveFromDir({
                directory: BUILD_PAGE_DIR,
                path: reqPath,
                From: 'PagesResponse'
            });
            if (pagesResponse) return pagesResponse;

            return new Response('ERROR 404: NOT FOUND', {
                status: 404,
                headers
            });
        }

        catch (e: any) {
            return new Response("ERROR 502", { status: 502 });
        }
    },
    websocket: {
        open(ws) { ws.send('Hola!') },
        close(ws) { },
        message(ws, message) { },
    }
});




console.log(`${(new Date).toLocaleTimeString()} http://${host.hostname}:${host.port}`);
