import { GearDb } from "../helpers/db.ts";
import { Gear, Component } from "../types.ts";
import { gearSchema, compSchema } from "../helpers/validation.ts";

const getGears = async (ctx: any) => {
  const gears = await GearDb.find();
  gears.map((gear: any) => {
    delete gear._id;
  });

  ctx.response.body = gears;
};

const getAGear = async (ctx: any) => {
  const { hw } = ctx.params;

  const gear = await GearDb.findOne({ hardware: hw.toLowerCase() });

  if (!gear) {
    const err: any = new Error("Hardware not found");
    err.status = 404;
    throw err;
  }

  delete gear._id;

  ctx.response.body = gear;
};

const addGear = async (ctx: any) => {
  try {
    const body = await ctx.request.body();

    if (body.type !== "json") throw new Error("Invalid Body");

    let newGear = (await gearSchema.validate(body.value) as Gear);
    newGear = await gearSchema.cast(newGear, { stripUnknown: true });

    const existing = await GearDb.findOne({ hardware: newGear.hardware });

    if (existing) {
      throw new Error(
        "Hardware exists, consider adding components to it instead",
      );
    }

    GearDb.insertOne(newGear);
    ctx.response.body = newGear;
    ctx.response.status = 201;
  } catch (error) {
    error.status = 422;
    throw error;
  }
};

const addComp = async (ctx: any) => {
  const { hw } = ctx.params;

  const gear = await GearDb.findOne({ hardware: hw.toLowerCase() });

  if (!gear) {
    const err: any = new Error("Hardware not found");
    err.status = 404;
    throw err;
  }

  try {
    const body = await ctx.request.body();

    if (body.type !== "json") throw new Error("Invalid Body");

    let comp = (await compSchema.validate(body.value) as Component);
    comp = await compSchema.cast(comp, { stripUnknown: true });

    let { components } = gear;

    components.push(comp);

    await GearDb.updateOne(
      { hardware: hw.toLowerCase() },
      {
        $set: {
          components: components,
        },
      },
    );

    const updatedGear = await GearDb.findOne({ hardware: hw.toLowerCase() });

    ctx.response.body = updatedGear;
    ctx.response.status = 200;
  } catch (error) {
    error.status = 422;
    throw error;
  }
};

export { getGears, getAGear, addGear, addComp };
