import React from 'react';
import { useFormik } from "formik";
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";

const Form = () => {

    const { values, handleChange } = useFormik({ initialValues: { email: "", age: "", password: "", confirmPassword: "" } });
    // Values of inputs are stored into values variables
    console.log(values);

    return (
        <Card style={{ padding: "1rem" }} elevation={3}>
            <h2>🙇‍♂️ Ingrese datos</h2>
            <form style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
                <TextField value={values.email} onChange={handleChange} label="Email" variant="outlined" name='email' />
                <TextField value={values.age} onChange={handleChange} label="Age" variant="outlined" name='age' type='number' />
                <TextField value={values.password} onChange={handleChange} label="Password" variant="outlined" name='password' type='password' />
                <TextField value={values.confirmPassword} onChange={handleChange} label="Email" variant="outlined" name='confirmPassword' type='password' />
            </form>
        </Card>

    )
}

export default Form