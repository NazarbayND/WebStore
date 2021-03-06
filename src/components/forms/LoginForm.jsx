import React, { useState } from "react";
import Joi from "joi";

import Button from "../button/Button";
import Input from "./Input";

const LoginForm = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [errors, SetErrors] = useState({});

  const schema = Joi.object({
    username: Joi.string().required().label("Логин"),
    password: Joi.string().required().label("Пароль"),
  });

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const objShema = Joi.object({ [name]: schema[name] });
    const { error } = objShema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const { error } = schema.validate(account, { abortEarly: false });
    if (!error) return null;
    console.log();
    return error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
  };

  const handleChange = ({ currentTarget: input }) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];
    SetErrors(newErrors);
    const newLogin = { ...account };
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
          placeholder="Логин"
          error={errors.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          error={errors.password}
          onChange={handleChange}
        />
      </div>
      <p className="text text--danger">some dumy text</p>
      <Button disabled={validate()}>Войти</Button>
    </form>
  );
};
export default LoginForm;
