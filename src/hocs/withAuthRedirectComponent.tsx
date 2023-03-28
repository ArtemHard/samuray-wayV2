import { Navigate } from "react-router-dom";

export const WithAuthRedirectComponent = (Component: any) => {
  const RedirectComponent = (props: any) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />;
    }
    return <Component {...props} />;
  };
  return RedirectComponent;
};
