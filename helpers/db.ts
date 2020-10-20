import { MongoClient } from "../deps.ts";

const client = new MongoClient();
client.connectWithUri(
  Deno.env.get("MONGODB_URI") || "mongodb://localhost:27017",
);

const db = client.database(Deno.env.get("MONGODB_DATABASE") || "api");

const GearDb = db.collection("gears");
const KeyDb = db.collection("keys");

export { db, GearDb, KeyDb };
