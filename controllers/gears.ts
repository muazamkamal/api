import { Gear } from "../types.ts";
import { GearDb } from "../helpers/db.ts";

// Temporary sample load
const cpu = {
  hardware: "CPU",
  components: [{
    name: "AMD Ryzen™ 5 3600",
    quantity: 1,
    hyperlink: "https://www.amd.com/en/products/cpu/amd-ryzen-5-3600",
  }],
  banner: "https://muazamkamal.com/img/cpu.915fe0e7.jpg",
};

const getGears = async (ctx: any) => {
  ctx.response.body = await GearDb.find();
};

export { getGears };
