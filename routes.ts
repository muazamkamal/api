import { Router } from "https://deno.land/x/oak/mod.ts";
import { checkKey } from "./controllers/keyAuth.ts";
import { getGears, getAGear, addGear, addComp, removeGear } from "./controllers/gears.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = {
    message: "⌨🎧🎮🎬",
  };
});

router.get("/gears", getGears);
router.get("/gears/:hw", getAGear);
router.post("/gears", checkKey, addGear);
router.put("/gears/:hw", checkKey, addComp);
router.delete("/gears/:hw", checkKey, removeGear);

export default router;
