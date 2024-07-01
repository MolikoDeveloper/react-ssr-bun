import { hydrateRoot } from "react-dom/client";
//@ts-ignore
const { default: App } = await import(globalThis?.PATH_TO_PAGE);

hydrateRoot(document, <App />);