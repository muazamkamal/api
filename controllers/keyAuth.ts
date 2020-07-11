import { KeyDb } from "../helpers/db.ts";

const checkKey = async (ctx: any, next: any) => {
  const key = await ctx.request.headers.get("X-API-KEY");

  if (key) {
    const validKey = await KeyDb.findOne({ api_key: key });

    if (!validKey) {
      const error: any = new Error("Bad API key");
      error.status = 401;

      throw error;
    }
  } else {
    const error: any = new Error("API key missing");
    error.status = 403;

    throw error;
  }

  await next();
};

export { checkKey };
