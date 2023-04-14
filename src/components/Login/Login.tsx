import { useForm } from "react-hook-form";
import { signInObjType } from "../../api/authApi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { signInUser } from "../../redux/actions/authAC";
import { borderColorForInput } from "../../common/CommonForm";
import { useNavigate } from "react-router-dom";
import { selectorAuthisAuth } from "../../redux/selectors";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(selectorAuthisAuth);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<signInObjType>();

  const onSubmit = handleSubmit((data) => {
    dispatch(signInUser(data));
  });
  if (isAuth) navigate("/profile");

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

// type LoginFormPropsType = {
//   email: string;
//   password: string;
//   updateAction: (data: FormData) => void;
// };
