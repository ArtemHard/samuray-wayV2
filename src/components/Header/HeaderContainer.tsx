import { useEffect } from "react";
import { authApi } from "../../api/authApi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { authUser, setAuthUserData } from "../../redux/actions/authAC";
import {
  selectorAuthEmail,
  selectorAuthId,
  selectorAuthisAuth,
  selectorAuthisFetching,
  selectorAuthLogin,
} from "../../redux/selectors";
import { Header } from "./Header";

/*
export type HeaderDispatchProps = ReturnType<typeof mapDispatchToProps>;
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setAuthUserData: (userData: userDataType) =>
      dispatch(setAuthUserData(userData)),
    toggleIsFetching: () => dispatch(toggleIsFetching),
  } as const;
};
*/
export const HeaderContainer = () => {
  // const dispatch = useAppDispatch();
  useEffect(() => {
    authUser();
    // authApi.authMe().then((data) => {
    //   console.log("here");
    //   if (data.resultCode === 0) {
    //     console.log(data);
    //     const { id, login, email, isAuth } = data.data;
    //     dispatch(setAuthUserData({ id, login, email, isAuth }));
    //   }
    //   if (data.resultCode === 1) {
    //     console.warn("NOT AUTHORIZED");
    //   }
    // });
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
    />
  );
};
