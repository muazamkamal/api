import { GearDb } from "../helpers/db.ts";
import { Gear } from "../types.ts";
import { yup, gearSchema } from "../helpers/validation.ts";

const getGears = async (ctx: any) => {
  ctx.response.body = await GearDb.find();
};

const addGears = async (ctx: any) => {
  try {
    const body = await ctx.request.body();

    if (body.type !== "json") throw new Error("Invalid Body");

    const newGear = (await gearSchema.validate(body.value) as Gear);
    const existing = await GearDb.findOne({ "hardware": newGear.hardware });

    if (existing) {
      throw new Error(
        "Hardware exists, consider adding components to it instead",
      );
    }

    GearDb.insertOne(newGear);
    ctx.response.body = newGear;
  } catch (error) {
    error.status = 422;
    throw error;
  }
};

export { getGears, addGears };
