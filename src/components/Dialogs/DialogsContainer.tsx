import { Dialogs } from "./Dialogs";
import {
  messagesPageType,
  sendMessageAC,
  updateNewMessageBodyCreatorAC,
} from "../../redux/dialogs-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";
import { withRouter2 } from "../Profile/ProfileContainer/ProfileContainer";
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
export type PropsForDialogs = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, mapDispatchToProps);
const DialogsContainer = connector(withRouter2(Dialogs));

export default DialogsContainer;
