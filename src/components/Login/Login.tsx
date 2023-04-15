import { useForm } from "react-hook-form";
import { signInObjType } from "../../api/authApi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setErrorAuth, signInUser } from "../../redux/actions/authAC";
import { borderColorForInput } from "../../common/CommonForm";
import { useNavigate } from "react-router-dom";
import { selectorAuthErrors, selectorAuthisAuth } from "../../redux/selectors";
import { useEffect } from "react";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

type CustomError = {
  customError: string;
};
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(selectorAuthisAuth);
  const { serverError } = useAppSelector(selectorAuthErrors);
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<signInObjType & CustomError>({
    criteriaMode: "all",
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setErrorAuth(null));

    dispatch(signInUser(data));
  });

  const onClickHandler = () => clearErrors("customError");

  if (isAuth) navigate("/profile");

  useEffect(() => {
    if (serverError?.length) {
      setError(
        "customError",
        {
          type: "server side",
          message: "server return false",
        },
        { shouldFocus: true }
      );
    }
    // else clearErrors("customError");
  }, [serverError]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          // type='email'
          style={borderColorForInput(errors.email?.type)}
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <input
          type='password'
          style={borderColorForInput(errors.password?.type)}
          {...register("password", { required: true })}
        />
      </div>
      <div>
        <input type='checkbox' {...register("rememberMe")} /> remeber me
      </div>
      {errors.password && (
        <span style={{ color: "red" }}>This field is required</span>
      )}
      {errors.customError &&
        serverError &&
        serverError.map((e, index) => (
          <span key={index} style={{ color: "red" }}>
            {e}
          </span>
        ))}
      <div>
        <button onClick={onClickHandler}>Login</button>
      </div>
    </form>
  );
};
