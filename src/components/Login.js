import React from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaOpencart } from "react-icons/fa";

const schema = yup.object({
  userName: yup.string().min(3).max(10).required(),
  password: yup.string().min(4).required(),
});

function Login() {
  const LoginData = JSON.parse(sessionStorage.getItem("LoginData"));
  const navigate = useNavigate();
  const navtoRegister = () => {
    navigate("/Register");
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    // console.log(data.userName);
    console.log(LoginData);
    const res = LoginData.find(
      ({ userName, Password }) =>
        userName == data.userName || Password == data.password
    );
    console.log(res);
    if (res != undefined) {
      navigate("/");
    } else {
      document.getElementById("errUser").innerHTML =
        "You've entered wrong userName";
      document.getElementById("errPas").innerHTML =
        "Your password or username is incorrect";
    }
  };
  return (
    <>
      <div className="Login">
        <div className="box">
          <h3 style={{ color: "blue", fontFamily: "math" }}>
            Shopper's{" "}
            <span style={{ color: "salmon", fontFamily: "math" }}>Stop</span>{" "}
            <FaOpencart style={{ fontSize: "30px" }} />
          </h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormCheckLabel>User Name</FormCheckLabel>
              <FormControl
                type="text"
                {...register("userName")}
                placeholder="Username"
              />
              <p id="errUser">{errors.userName?.message}</p>
            </FormGroup>
            <FormGroup>
              <FormCheckLabel>Password</FormCheckLabel>
              <FormControl
                type="password"
                {...register("password")}
                placeholder="Enter your password"
              />
              <p id="errPas">{errors.password?.message}</p>
            </FormGroup>
            <input
              type="submit"
              style={{ fontSize: "20px", fontFamily: "math" }}
              className="btn btn-primary col-sm-12 mt-3"
              value="Login"
            ></input>
          </Form>
          <hr></hr>
          <Button
            style={{ fontSize: "20px", fontFamily: "math" }}
            className="mt-2 btn-success"
            onClick={navtoRegister}
          >
            Register Here
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
