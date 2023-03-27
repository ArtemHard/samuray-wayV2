import React from "react";
import { Navigate } from "react-router-dom";
import { reducersType } from "../redux/redux-store";
import { connect } from "react-redux";

type mapStateToPropsTYpe = {
  isAuth: boolean;
};

const mapStateToProps = (state: reducersType) => {
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
