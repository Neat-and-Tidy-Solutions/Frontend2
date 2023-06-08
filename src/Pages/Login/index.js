import {Form, Formik, FormikHelper, Field, FieldProps } from "formik"
import * as yup from "yup"
const Login = () => {
    const initialValue ={
        email: "",
        password: ""
    }

    const loginSchema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("Required*"),
        password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password must be at least 30 characters")
      .required("Required*"),
    });

    const onSubmit = ( values, helpers) => {
        console.log(values);

    return (
        <div className="login">
        <div className="design">

        <Formik
          onSubmit={onSubmit}
          validationSchema={loginSchema}
          initialValues={initialValue}
          enableReinitialize
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field name="fullName">
                {({ field, meta }) => (
                  <div>
                    <input
                      type="text"
                      className="inputField"
                      placeholder="FullName"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error }</p>
                    ) : null}
                  </div>
                )}
              </Field>

              <Field name="email">
                {({ field, meta }) => (
                  <div>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    className="inputField"
                    {...field} />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error}</p>
                    ) : null}
                  </div>
                )}
              </Field>

              <Field name="password">
                {({ field, meta }) => (
                  <div>
                    <input 
                    type="password" 
                    placeholder="Password"
                    className="inputField" 
                    {...field} 
                    />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error}</p>
                    ) : null}
                  </div>
                )}
              </Field>

              <div>
                <button className="btn" type="submit" aria-label="">
                    Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        </div>
        </div>
    )
}
}

export default Login;