
export default function(props: { title: string; children: React.ReactNode, className?:string }) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href="favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Template of SSR with Bun" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="/index.tailwind.css" />
                <script type="module" src="/debug.js" async />
                <title>{props.title}</title>
            </head>
            <body>
                <div id="App" role="main">
                    <article className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-base text-white">
                        <h3 className="text-5xl m-0 mt-7 mb-7">{props.title}</h3>
                        <div className={props.className}>
                            {props.children}
                        </div>
                    </article>
                </div>
            </body>
        </html>
    );
}