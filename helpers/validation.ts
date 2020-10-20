import { yup } from "../deps.ts";

const compSchema = (yup as any).object().shape({
  name: yup.string().trim().min(2).required(),
  description: yup.string().trim().min(2),
  quantity: yup.number().positive().integer().required(),
  hyperlink: yup.string().trim().url().required(),
});

const gearSchema = (yup as any).object().shape({
  hardware: yup.string().trim().lowercase().min(2).required(),
  components: (yup as any).array().of(compSchema).required(),
  banner: yup.string().trim().url().required(),
});

export { compSchema, gearSchema, yup };
