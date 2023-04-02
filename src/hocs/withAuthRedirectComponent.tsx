import { Navigate } from "react-router-dom";
import { reducersType } from "../redux/redux-store";
import { connect } from "react-redux";
type mapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: reducersType): mapStateToPropsType => {
  return {
    // userProfile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};
export const WithAuthRedirectComponent = (Component: any) => {
  const RedirectComponent = (props: any) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />;
    }
    return <Component {...props} />;
  };
  let connectedAuthRedirectComponent =
    connect(mapStateToProps)(RedirectComponent);
  return connectedAuthRedirectComponent;
};
