import { Router } from "https://deno.land/x/oak/mod.ts";
import { Gear } from "./types.ts";

const router = new Router();
const DB = new Array<Gear>();

DB.push({
  hardware: "CPU",
  components: [{
    name: "AMD Ryzen™ 5 3600",
    quantity: 1,
    hyperlink: "https://www.amd.com/en/products/cpu/amd-ryzen-5-3600",
  }],
  banner: "https://muazamkamal.com/img/cpu.915fe0e7.jpg",
});

router.get("/", (ctx) => {
  ctx.response.body = {
    message: "⌨🎧🎮🎬",
  };
});

router.get("/gears", (ctx) => {
  ctx.response.body = [...DB];
});

export default router;
