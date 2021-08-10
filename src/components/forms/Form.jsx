import React, { useState } from "react";
import Joi from "joi";

import Button from "../button/Button";
import Input from "./Input";

const Form = ({ error }) => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const validateProperty = ({ name, value }) => {};

  const [errors, SetErrors] = useState({});

  const validate = () => {
    const result = schema.validate(account, { abortEarly: false });
    if (!result.error) return null;
    console.log(result);
    return null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newLogin = account;
    newLogin[input.name] = input.value;
    setAccount(newLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    SetErrors(err || {});
    if (err) return;

    console.log(account);
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <p className="text text--primary">Войти</p>
      <div className="login-form__body">
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Логин"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
        />
      </div>
      <p className="text text--danger">some dumy text</p>
      <Button>Войти</Button>
    </form>
  );
};
export default Form;
