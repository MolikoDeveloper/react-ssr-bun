import type { Server } from "bun";

/***
 * you can put here whatever you want, API, security, etc... in my case, its gonna be for security in server side, like cookies validation, etc...
 */
export default async function (request: Request, server: Server): Promise<Response | undefined> {
    //console.log(request.headers.getAll("Set-Cookie"))

    return;
}