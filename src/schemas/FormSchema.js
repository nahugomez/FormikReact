import * as Yup from "yup";

const FormSchema = Yup.object().shape({
    email: Yup.string().email("Please, enter a valid email").required("Required"),
    age: Yup.number("Please provide a number").min(18, "Age must be greater or equal to 18").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password", undefined)], "Passwords must match").required()
});

export default FormSchema;