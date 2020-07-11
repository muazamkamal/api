import { Router } from "https://deno.land/x/oak/mod.ts";
import { checkKey } from "./controllers/keyAuth.ts";
import { getGears, addGears, addComp } from "./controllers/gears.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = {
    message: "⌨🎧🎮🎬",
  };
});

router.get("/gears", getGears);
router.post("/gears", checkKey, addGears);
router.put("/gears/:hw", checkKey, addComp);

export default router;
