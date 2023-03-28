import { Dialogs } from "./Dialogs";
import {
  messagesPageType,
  sendMessageAC,
  updateNewMessageBodyCreatorAC,
} from "../../redux/dialogs-reducer";
import { connect, ConnectedProps } from "react-redux";
import { compose, Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";

import { WithAuthRedirectComponent } from "../../hocs/withAuthRedirectComponent";

import { withRouter } from "../../hocs/withRouter";
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
  onSendmessageClickkhandler: () => void;
  onNewMessageChange: (newMessage: string) => void;
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
  return {
    onSendmessageClickkhandler: () => {
      dispatch(sendMessageAC());
    },
    onNewMessageChange: (newMessage: string) => {
      dispatch(updateNewMessageBodyCreatorAC(newMessage));
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

const authRedirectComponent = WithAuthRedirectComponent(Dialogs);
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
