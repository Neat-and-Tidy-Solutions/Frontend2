import { Form, Formik, Field,  } from "formik";
import * as yup from "yup";

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required*"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password must be at least 30 characters")
      .required("Required*"),
  });

  const onSubmit = (values) => {
    console.log(values);
  }
    return (
      <div className="login">
        <div className="design">
          <div className="form">
          <Formik
            onSubmit={onSubmit}
            validationSchema={loginSchema}
            initialValues={initialValue}
          >
            {({ isSubmitting, isValid }) => (
              <Form>

                <Field name="email">
                  {({ field, meta }) => (
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="inputField"
                        {...field}
                      />
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
                        className="inputField2"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <p className="text">{meta.error}</p>
                      ) : null}
                    </div>
                  )}
                </Field>

                <div>
                  <button className="bt" type="submit" aria-label="">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          </div>
        </div>
      </div>
    );
  };

export default Login;
