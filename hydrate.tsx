import { hydrateRoot } from "react-dom/client";
import { StaticRouter } from "react-router-dom/server";
//@ts-ignore
const { default: App } = await import(globalThis?.PATH_TO_PAGE);

hydrateRoot(document, <StaticRouter location={globalThis.location.pathname}><App /></StaticRouter>);