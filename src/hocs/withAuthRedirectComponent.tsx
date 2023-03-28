import React from "react";
import { Navigate } from "react-router-dom";
import { reducersType } from "../redux/redux-store";
import { connect } from "react-redux";
import { withRouter2 } from "../components/Profile/ProfileContainer/ProfileContainer";

export type AuthPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: reducersType): AuthPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const WithAuthRedirectComponent = (Component: React.ComponentType) => {
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
