import { Dialogs } from "./Dialogs";
import {
  messagesPageType,
  sendMessageAC,
  updateNewMessageBodyCreatorAC,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { reducersType } from "../../redux/redux-store";
type MapStateToPropsType = {
  state: messagesPageType;
};
const mapStateToProps = (state: reducersType): MapStateToPropsType => {
  return {
    state: state.dialogsPage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
