import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import FormSchema from "../schemas/FormSchema";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
    const handleData = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
    };
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: { email: "", age: "", password: "", confirmPassword: "" },
        validationSchema: FormSchema,
        onSubmit: handleData,
    });

    throw new Error("Error");

    return (
        <Card style={{ padding: "1rem" }} elevation={3}>
            <h2>🙇‍♂️ Ingrese datos</h2>
            <form onSubmit={handleSubmit}>
                <Box style={{ display: "flex", flexDirection: "column", rowGap: "1rem", marginBottom: "1rem" }}>
                    <TextField
                        error={errors.email && touched.email ? true : false}
                        helperText={errors.email && touched.email ? errors.email : ""}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Email"
                        variant="outlined"
                        name="email"
                    />
                    <TextField
                        error={errors.age && touched.age ? true : false}
                        helperText={errors.age && touched.age ? errors.age : ""}
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Age"
                        variant="outlined"
                        name="age"
                        type="number"
                    />
                    <TextField
                        error={errors.password && touched.password ? true : false}
                        helperText={errors.password && touched.password ? errors.password : ""}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Password"
                        variant="outlined"
                        name="password"
                        type="password"
                    />
                    <TextField
                        error={errors.confirmPassword && touched.confirmPassword ? true : false}
                        helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ""}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Confirm Password"
                        variant="outlined"
                        name="confirmPassword"
                        type="password"
                    />
                </Box>
                <LoadingButton variant="outlined" type="submit" loading={isSubmitting} loadingPosition="start" startIcon={<SendIcon />} size="medium">
                    Send data
                </LoadingButton>
            </form>
        </Card>
    );
};

export default Form;
