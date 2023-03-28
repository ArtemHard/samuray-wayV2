import { Dialogs } from "./Dialogs";
import {
  messagesPageType,
  sendMessageAC,
  updateNewMessageBodyCreatorAC,
} from "../../redux/dialogs-reducer";
import { connect, ConnectedProps, ConnectedComponent } from "react-redux";
import { Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";
import {
  withRouter2,
  WithRouterType,
} from "../Profile/ProfileContainer/ProfileContainer";
import {
  AuthPropsType,
  WithAuthRedirectComponent,
} from "../../hocs/withAuthRedirectComponent";
import { compose } from "redux";
import { useNavigate } from "react-router-dom";

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

export type PropsForDialogs = ConnectedProps<typeof connector2>;

// connector даёт type NEVER
const connector = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirectComponent
);
const connector2 = connect(mapStateToProps, mapDispatchToProps);

export const DialogsContainer = connector(withRouter2(Dialogs));

// third solution
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuthRedirectComponent(withRouter2(Dialogs)));
*/
