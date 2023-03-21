// import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { Component } from "react";

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}
/*
export const useWithRouter = <Props extends WithRouterProps>(
  Component2: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component2
        {...(props as Props)}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };
};

*/
