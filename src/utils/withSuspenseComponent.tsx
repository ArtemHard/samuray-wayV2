import { Navigate } from "react-router-dom";
import { reducersType } from "../redux/redux-store";
import { connect } from "react-redux";
import React from "react";
import { Loader } from "../components/common/Loader/Loader";
type mapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: reducersType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export const withSuspenseComponent = (Component: any) => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Component />
    </React.Suspense>
  );
};
