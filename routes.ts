import { Router } from "https://deno.land/x/oak/mod.ts";
import { getGears } from "./controllers/gears.ts";

const router = new Router();

router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "⌨🎧🎮🎬",
  };
});

router.get("/gears", getGears);

export default router;
