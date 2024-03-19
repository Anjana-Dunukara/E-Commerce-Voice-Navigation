import * as yup from "yup";

const LoginValidations = yup.object().shape({
  email: yup
    .string()
    .required("email is required")
    .email("please enter a valid email"),
  password: yup.string().required("password is required").min(5).max(20),
});

export default LoginValidations;
