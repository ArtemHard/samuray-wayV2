import { useEffect } from "react";
import { Dispatch } from "redux";
import { authApi } from "../../api/authApi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAuthUserData, userDataType } from "../../redux/actions/authAC";
import { reducersType } from "../../redux/redux-store";
import { toggleIsFetching } from "../../redux/users-reducer";
import { Header } from "./Header";

const selectorAuthId = (state: reducersType) => {
  return {
    id: state.auth.id,
  } as const;
};
const selectorAuthLogin = (state: reducersType) => {
  return {
    login: state.auth.login,
  } as const;
};
const selectorAuthEmail = (state: reducersType) => {
  return {
    email: state.auth.email,
  } as const;
};
const selectorAuthisAuth = (state: reducersType) => {
  return {
    isAuth: state.auth.isAuth,
  } as const;
};
const selectorAuthisFetching = (state: reducersType) => {
  return {
    isFetching: state.auth.isFetching,
  } as const;
};

export type HeaderDispatchProps = ReturnType<typeof mapDispatchToProps>;
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setAuthUserData: (userData: userDataType) =>
      dispatch(setAuthUserData(userData)),
    toggleIsFetching: () => dispatch(toggleIsFetching),
  } as const;
};

export const HeaderContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    authApi.authMe().then((data) => {
      if (data.resultCode === 0) {
        console.log(data);
        const { id, login, email, isAuth } = data.data;
        dispatch(setAuthUserData({ id, login, email, isAuth }));
      }
      if (data.resultCode === 1) {
        console.warn("NOT AUTHORIZED");
      }
    });
  }, []);

  const { id } = useAppSelector(selectorAuthId);
  const { login } = useAppSelector(selectorAuthLogin);
  const { email } = useAppSelector(selectorAuthEmail);
  const { isAuth } = useAppSelector(selectorAuthisAuth);
  const { isFetching } = useAppSelector(selectorAuthisFetching);

  return (
    <Header
      id={id}
      login={login}
      email={email}
      isAuth={isAuth}
      isFetching={isFetching}
      {...mapDispatchToProps(dispatch)}
    />
  );
};
