import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri(
  Deno.env.get("MONGODB_URI") || "mongodb://localhost:27017",
);

const db = client.database(Deno.env.get("MONGODB_DATABASE") || "api");

const GearDb = db.collection("gears");

export { db, GearDb };
