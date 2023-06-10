import { Form, Formik, Field,  } from "formik";
import * as yup from "yup";
const SignUp = () => {
  const initialValue = {
    userName: "",
    email: "",
    password: "",
    contactNumber: "",
    gender: ""
  };

  const signUpSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required*"),

    userName: yup.string().required('Required*'),

    contactNumber: yup
    .string()
    .matches(/^(\+234|0)\d{10}$/, 'Invalid contact number')
    .required('Required*'),
    gender: yup.string().oneOf(['MALE', 'FEMALE'], 'Invalid gender').required('Required*'),
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
    <div className="signUp">
      <div className="design2">
      <div className="form2">
      <Formik
            onSubmit={onSubmit}
            validationSchema={signUpSchema}
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
                        className="inputFieldA"
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
                        className="inputFieldB"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <p className="text">{meta.error}</p>
                      ) : null}
                    </div>
                  )}
                </Field>

                <Field name="userName">
                  {({ field, meta }) => (
                    <div>
                      <input
                        type="userName"
                        placeholder="Username"
                        className="inputFieldC"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <p className="text">{meta.error}</p>
                      ) : null}
                    </div>
                  )}
                </Field>

                <Field name="contactNumber">
                  {({ field, meta }) => (
                    <div>
                      <input
                        type="contactNumber"
                        placeholder="Contact number"
                        className="inputFieldD"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <p className="text">{meta.error}</p>
                      ) : null}
                    </div>
                  )}
                </Field>

                <Field name="gender">
                  {({ field, meta }) => (
                    <div>
                      <input
                        type="gender"
                        placeholder="Gender"
                        className="inputFieldE"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <p className="text">{meta.error}</p>
                      ) : null}
                    </div>
                  )}
                </Field>
                <div>
                  <button className="bt2" type="submit" aria-label="">
                    Sign up
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
                
  export default SignUp;
