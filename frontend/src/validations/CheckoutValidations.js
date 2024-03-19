import * as yup from "yup";

const CheckoutDetailsValidation = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be 16 digits"),
  expiry: yup
    .string()
    .required("Expiry date is required")
    .matches(/^\d{2}\/\d{2}$/, "Expiry date must be in MM/YY format"),
  cvc: yup
    .string()
    .required("CVC is required")
    .matches(/^\d{3}$/, "CVC must be 3 digits"),
});

export default CheckoutDetailsValidation;
