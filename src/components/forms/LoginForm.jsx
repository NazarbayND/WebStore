import React from "react";
import Button from "../button/Button";
import Input from "./Input";

const LoginForm = () => {
  return (
    <div className="login-form">
      <p className="text text--primary">Войти</p>
      <Input type="email" name="username" id="username" placeholder="Логин" />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
      />
      <p className="text text--danger">some dumy text</p>
      <Button>Войти</Button>
    </div>
  );
};
export default LoginForm;
