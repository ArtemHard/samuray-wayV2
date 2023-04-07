import { useForm } from "react-hook-form";
import { signInObjType } from "../../api/authApi";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { signInUser } from "../../redux/actions/authAC";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

// type LoginFormPropsType = {
//   email: string;
//   password: string;
//   updateAction: (data: FormData) => void;
// };

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<signInObjType>();

  const onSubmit = handleSubmit((data) => {
    dispatch(signInUser(data));
    // authApi.signIn(data);
    // console.log(data);
    reset();
  });
  // const onSubmit = data => props.updateAction(data);
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input {...register("email", { required: true })} />
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
