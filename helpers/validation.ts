import * as yup from "https://cdn.pika.dev/yup@^0.29.1";

const compSchema = yup.object().shape({
  name: yup.string().trim().min(2).required(),
  description: yup.string().trim().min(2),
  quantity: yup.number().positive().integer().required(),
  hyperlink: yup.string().trim().url().required(),
});

const gearSchema = yup.object().shape({
  hardware: yup.string().trim().lowercase().min(2).required(),
  components: yup.array().of(compSchema).required(),
  banner: yup.string().trim().url().required(),
});

export { yup, compSchema, gearSchema };
