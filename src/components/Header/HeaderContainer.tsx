import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getAuthUserData, logOut } from "../../redux/actions/authAC";
import {
  selectorAuthEmail,
  selectorAuthId,
  selectorAuthisAuth,
  selectorAuthisFetching,
  selectorAuthLogin,
} from "../../redux/selectors";
import { Header } from "./Header";

export const HeaderContainer = () => {
  const dispatch = useAppDispatch();

  const logOutClickHandler = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(getAuthUserData());
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
      logOutClickHandler={logOutClickHandler}
    />
  );
};
