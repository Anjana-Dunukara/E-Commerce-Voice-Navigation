import * as yup from "yup";

const ProductValidations = yup.object().shape({
  name: yup.string().required(),
  color: yup.string().required(),
  shipingLocations: yup.array().required(),
  description: yup.string().max(200).required(),
  category: yup.string().required(),
  condition: yup.string().required(),
  price: yup.number().required(),
});

export default ProductValidations;
