import { ErrorMessage, Field, Form, Formik } from "formik";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import  authSer  from "../sevices";
import { toast } from "react-toastify";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});
function Login() {
  const navigate = useNavigate();
  function onSubmit(values) {
    var fd = new FormData();
    fd.append('username', values.username);
    fd.append('password', values.password);
    fd.append('subdomain', 'msrcosmos');
    authSer.login(fd).then(function(response){
      console.log(response);
      toast.success("Wow so easy!")
      navigate("/home");
    }, function(err){
      console.log(err);
    });
  }

  return (
    <>
      <HelmetProvider>
        <>
          <Helmet>
            <title>{`My React App | Login`}</title>
          </Helmet>
          <Formik
            initialValues={{ username: "", password: "" }}
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
                        name="username"
                        placeholder="Enter email"
                        autoComplete="off"
                        className={`mt-2 form-control
                          ${touched.username && errors.username ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="username"
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
                    <li className="list-group-item">Email: {values.username}</li>
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
    </>
  );
}

export default Login;
