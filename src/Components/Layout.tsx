import React, { useState } from "react";
import Sidebar from "./Sidebar";

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
                <title>{props.title}</title>
                <link rel="stylesheet" href="/index.css" />
            </head>
            <body>
                <Sidebar></Sidebar>
                <div className="App E" role="main">
                    <article className="App-article">
                        <div style={{ height: "30px" }}></div>
                        <h3>{props.title}</h3>
                        <div style={{ height: "30px" }}></div>
                        {props.children}
                    </article>
                </div>
            </body>
        </html>

    );
}