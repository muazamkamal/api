import { Gear } from "../types.ts";

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

const getGears = (ctx: any) => {
  ctx.response.body = [...DB];
};

export { getGears };
