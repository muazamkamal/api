import { Application } from "./deps.ts";
import router from "./routes.ts";
import RequestError from "./controllers/RequestError.ts";

const port = parseInt(Deno.env.get("PORT") || "3000");
const app = new Application();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const error = err as RequestError;
    ctx.response.status = error.status || 500;
    ctx.response.body = {
      message: error.message,
    };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port });
