// LoginForm.js
import React, {useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import hide from "../assests/images/hide.png";
import show from "../assests/images/visible.png";
import { login } from "../apis";
import { MainContext } from "../context/MainContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ onSubmit }) => {
  const {setToken} = useContext(MainContext)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (values) => {
    console.log(values, "login");
    try{
      const response = await login(values)
      console.log(response, "response")
      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        navigate("/")
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };

  return (
    <>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          <div className="d-flex justify-content-center align-items-center minheight">
            <Form className="d-flex flex-column justify-content-evenly align-items-center border formheight">
              <div className="text-capitalize">
                <div className="d-flex justify-content-between align-items-center divWidth">
                  <label htmlFor="email" className="mr-10">
                    Email:
                  </label>
                  <Field type="email" id="email" name="email" />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="text-capitalize">
                <div className="d-flex justify-content-between align-items-center divWidth">
                  <label htmlFor="password">Password:</label>
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                  />
                </div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="pass-visibility"
                >
                  <img
                    src={showPassword ? hide : show}
                    className="pass-visibility-img"
                    alt="show/hide pass"
                  />
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="text-capitalize">
                <button className="btn buttons btn-sm" type="submit">
                  Login
                </button>
              </div>
              <div className="text-capitalize">
                not registred?
                <Link to="/signup" className="linkclass">
                  {" "}
                  <button className="btn buttons btn-sm" type="submit">
                    Signup
                  </button>
                </Link>
              </div>
            </Form>
          </div>
        </Formik>
    </>
  );
};

export default Login;
