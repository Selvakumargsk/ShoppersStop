import React from "react";
import { Button, Col, Form, FormControl, FormGroup } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  firstName: yup.string().min(3).required("Enter your FirstName"),
  lastName: yup.string().required("Enter your LastName"),
  userName: yup.string().required("mandatoy field"),
  email: yup.string().email().required("Please enter your email address"),
  number: yup.string().required("Enter your Phone number"),
  city: yup.string().required("Please enter your city"),
  password: yup.string().min(4).required("Set your Password"),
  confirmPassword: yup
    .string()
    .required("Please reenter your password")
    .oneOf([yup.ref("password"), null]),
});

function Register() {
  const LoginData = JSON.parse(sessionStorage.getItem("LoginData"));
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data, LoginData);
    const credentials = { username: data.userName, Password: data.password };
    LoginData.push(credentials);
    console.log(LoginData);
    sessionStorage.setItem("LoginData", JSON.stringify(LoginData));
    navigate("/Login");
  };
  return (
    <>
      <div className="Login">
        <div className="box">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup controlId="firstName" className="row">
              <Col>
                <FormCheckLabel>Firstname</FormCheckLabel>
                <FormControl
                  type="text"
                  {...register("firstName")}
                  placeholder="Firstname"
                />
                <p>{errors.firstName?.message}</p>
              </Col>
              <Col>
                <FormCheckLabel>Lastname</FormCheckLabel>
                <FormControl
                  type="text"
                  {...register("lastName")}
                  placeholder="Lastname"
                />
                <p>{errors.lastName?.message}</p>
              </Col>
            </FormGroup>
            <FormGroup>
              <FormCheckLabel>Username</FormCheckLabel>
              <FormControl
                type="text"
                {...register("userName")}
                placeholder="UserName"
              ></FormControl>
              <p>{errors.city?.userName}</p>
            </FormGroup>
            <FormGroup>
              <FormCheckLabel>Email Address</FormCheckLabel>
              <FormControl
                type="email"
                {...register("email")}
                placeholder="abc@gmail.com"
              ></FormControl>
              <p>{errors.email?.message}</p>
              <FormCheckLabel>Mobile Number</FormCheckLabel>
              <FormControl
                type="number"
                {...register("number")}
                placeholder="Mobilenumber"
              ></FormControl>
              <p>{errors.number?.message}</p>
            </FormGroup>
            <FormGroup>
              <FormCheckLabel>Your city</FormCheckLabel>
              <FormControl
                type="name"
                {...register("city")}
                placeholder="enter your city"
              ></FormControl>
              <p>{errors.city?.message}</p>
            </FormGroup>
            <FormGroup className="row">
              <Col>
                <FormCheckLabel>Set Password</FormCheckLabel>
                <FormControl
                  type="password"
                  {...register("password")}
                  placeholder="****"
                ></FormControl>
                <p>{errors.password?.message}</p>
              </Col>{" "}
              <Col>
                {" "}
                <FormCheckLabel>Reenter Password</FormCheckLabel>
                <FormControl
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="****"
                ></FormControl>
                <p>{errors.confirmPassword?.message}</p>
              </Col>{" "}
            </FormGroup>
            <Button className="mt-3 col-sm-12" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
