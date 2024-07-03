import Sidebar, { type Item } from "./Sidebar";
import DocumentCheckSolid from "./heroicons/document-check.solid";
import HomeSolid from "./heroicons/home.solid";
import WrenchSolid from "./heroicons/wrench.solid";

const items: Item[] = [
    {
        Name: "Home",
        href: "/",
        icon: <HomeSolid color="white" />
    },
    {
        Name: "Settings",
        href: "/settings",
        icon: <WrenchSolid color="white" />
    },
    {
        Name: "Test",
        href: "/test",
        icon: <DocumentCheckSolid color="white" />
    }
]

export function Layout(props: { title: string; children: React.ReactNode }) {
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
                <title>{props.title}</title>
            </head>
            <body>
                <Sidebar items={items}></Sidebar>
                <div className="ml-48" id="App" role="main">
                    <article className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-base text-white">
                        <h3 className="text-5xl m-0 mt-7 mb-7">{props.title}</h3>
                        {props.children}
                    </article>
                </div>
            </body>
        </html>
    );
}