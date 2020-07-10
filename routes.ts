import { Router } from "https://deno.land/x/oak/mod.ts";
import { getGears, addGears } from "./controllers/gears.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = {
    message: "⌨🎧🎮🎬",
  };
});

router.get("/gears", getGears);
router.post("/gears", addGears);

export default router;
