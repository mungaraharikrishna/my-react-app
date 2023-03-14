import { ErrorMessage, Field, Form, Formik } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});
function Login() {
  const navigate = useNavigate();
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");

  function onSubmit(values) {
    console.log(values);
    navigate("/home");
  }

  //   function changeInput(type, event) {
  //     if (type === "email") {
  //       setUserName(event);
  //     } else {
  //       setPassword(event);
  //     }
  //   }

  return (
    <>
      <HelmetProvider>
        <>
          <Helmet>
            <title>{`My React App | Login`}</title>
          </Helmet>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h1>Login Form</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="mt-3">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              ) : (
                <div>
                  <h1 className="p-3 mt-5">Form Submitted</h1>

                  <div className="alert alert-success mt-3">
                    Thank for your connecting with us. Here's what we got from
                    you !
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">
                      Password: {values.password}
                    </li>
                  </ul>
                </div>
              )
            }
          </Formik>
        </>
      </HelmetProvider>
      {/* <form onSubmit={onSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={userName}
            onChange={(e) => changeInput("email", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            value={password}
            onChange={(e) => changeInput("password", e.target.value)}
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{" "}
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
    </>
  );
}

export default Login;
