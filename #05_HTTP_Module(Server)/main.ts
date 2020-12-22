import { serve } from "https://deno.land/std@0.81.0/http/server.ts";

const server = serve({ port: 3000 });

console.log("Listening on http://127.0.0.1:3000");

for await (const request of server) {
  const url = request.url;
  request.respond({ body: `Hello World, you visited ${url}` });
}
