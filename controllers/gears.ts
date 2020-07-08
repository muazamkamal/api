import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { Gear } from "../types.ts";

const client = new MongoClient();
client.connectWithUri(Deno.env.get("MONGO_URI") || "mongodb://localhost:27017");

const db = client.database("api");
const gearDb = db.collection("gear");

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
  ctx.response.body = await gearDb.find({ hardware: { $ne: null } });
};

export { getGears };
