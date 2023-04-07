import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

type FormData = {
  login: string;
  password: string;
  rememberMe: boolean;
};
type LoginFormPropsType = {
  login: string;
  password: string;
  updateAction: (data: FormData) => void;
};

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  // const onSubmit = data => props.updateAction(data);
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input {...register("login", { required: true })} />
      </div>
      <div>
        <input {...register("password", { required: true })} />
      </div>
      <div>
        <input type='checkbox' {...register("rememberMe")} /> remeber me
      </div>
      {errors.password && <span>This field is required</span>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
