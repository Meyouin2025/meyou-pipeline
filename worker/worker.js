export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }

    if (url.pathname === "/api/ping") {
      return new Response(JSON.stringify({
        ok: true,
        build: "MB-PIPELINE@LOCK",     // <<< changed
        time: new Date().toISOString(),
        routes: ["/api/ping"]
      }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store"
        }
      });
    }

    return new Response(JSON.stringify({
      ok:false, error:"Not Matched", hint:"GET /api/ping"
    }), {
      status:404,
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        "Cache-Control":"no-store"
      }
    });
  }
};
