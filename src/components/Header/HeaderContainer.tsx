import { Component } from "react";
import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { authApi } from "../../api/authApi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAuthUserData, userDataType } from "../../redux/actions/authAC";
import { reducersType, storeType } from "../../redux/redux-store";
import { toggleIsFetching } from "../../redux/users-reducer";
import { Header } from "./Header";
/*
export class HeaderContainer extends Component {
  componentDidMount(): void {
    // this.props.toggleIsFetching(true);
    authApi.authMe().then((data) => {
      debugger;
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
*/
// const mapStateToProps

// export default connect()()
// type mapStateToPropsType = {};
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
const selectorAuthisFetching = (state: reducersType) => {
  return {
    isFetching: state.auth.isFetching,
  } as const;
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setAuthUserData: (userData: userDataType) =>
      dispatch(setAuthUserData(userData)),
    toggleIsFetching: () => dispatch(toggleIsFetching),
  };
};

export const HeaderContainer = () => {
  const dispatch = useAppDispatch();

  authApi.authMe().then((data) => {
    console.log(data);

    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data.login));
    }
    if (data.resultCode === 1) {
      console.log("NOT AUTHORIZED");
    }
  });

  const id = useAppSelector(selectorAuthId);
  const login = useAppSelector(selectorAuthLogin);
  const email = useAppSelector(selectorAuthEmail);
  const isFetching = useAppSelector(selectorAuthisFetching);

  return (
    <Header
    // id={id}
    // login={login}
    // email={email}
    // isFetching={isFetching}
    // {...mapDispatchToProps(dispatch)}
    />
  );
};
