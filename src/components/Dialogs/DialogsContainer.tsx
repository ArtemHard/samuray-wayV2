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
import { WithAuthRedirectComponent } from "../../hocs/withAuthRedirectComponent";
import { compose } from "redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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

export type ForDialogsProps = ConnectedProps<typeof connected>;
const connected = connect(mapStateToProps, mapDispatchToProps);

export const DialogsContainer = connected(withRouter2(authRedirectComponent));

// third solution
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuthRedirectComponent(withRouter2(Dialogs)));
*/
