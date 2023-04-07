import { Dialogs } from "./Dialogs";
import { messagesPageType, sendMessageAC } from "../../redux/dialogs-reducer";
import { connect, ConnectedProps } from "react-redux";
import { compose, Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";

import { WithAuthRedirectComponent } from "../../hocs/withAuthRedirectComponent";

import { ComponentType } from "react";

type MapStateToPropsType = {
  state: messagesPageType;
  isAuth: boolean;
};
const mapStateToProps = (state: reducersType): MapStateToPropsType => {
  return {
    state: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

type DispatchToPropsType = {
  onSendmessageClickkhandler: (newMessageBody: string) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
  return {
    onSendmessageClickkhandler: (newMessageBody: string) => {
      dispatch(sendMessageAC(newMessageBody));
    },
  };
};
/*
// const AuthRedirectComponent = WithAuthRedirectComponent(Dialogs);

// export type PropsForDialogs = ConnectedProps<typeof connector>;
// const connector = connect(mapStateToProps, mapDispatchToProps);
// const DialogsContainer = connector(withRouter2(Dialogs));

// export default DialogsContainer;
*/
// second solution

// export type AuthAndRouterTypes = AuthPropsType & WithRouterType;

// const withRouterDialogsComponent = withRouter2(authRedirectDialogsComponent)

export type ForDialogsProps = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, mapDispatchToProps);

export default compose<ComponentType>(
  connector,
  WithAuthRedirectComponent
)(Dialogs);

// third solution
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuthRedirectComponent(withRouter2(Dialogs)));
*/
