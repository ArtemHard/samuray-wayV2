import { DialogsType, MessageType } from "./store";

const SEND_MESSAGE = "ADD-NEWPOSTTEXT";
const UPDATE_NEWPOSTTEXT = "UPDATE-NEWPOSTTEXT";

export type messagesPageType = {
  messages: MessageType[];
  dialogs: DialogsType[];
  newMessageText: string;
};

let initialState: messagesPageType = {
  dialogs: [
    {
      id: 1,
      name: "Igor",
    },
    {
      id: 2,
      name: "Olga",
    },
    {
      id: 3,
      name: "Sasha",
    },
  ],
  messages: [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How are you?",
    },
    {
      id: 3,
      message: "Hellow",
    },
  ],
  newMessageText: "",
};

export const DialogsReducer = (
  state = initialState,
  action: ActionTypes
): messagesPageType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newPostText = {
        id: 1,
        message: state.newMessageText,
      };

      const newState = { ...state };
      newState.messages = [...state.messages];
      newState.messages.push(newPostText);
      newState.newMessageText = "";

      return newState;
    }

    case UPDATE_NEWPOSTTEXT: {
      const stateCopy = { ...state };
      stateCopy.newMessageText = action.newMessageText;
      console.log(stateCopy.newMessageText);

      return stateCopy;
    }
    default:
      return state;
  }
};

type ActionTypes =
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyCreatorAC>;
export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE,
  } as const;
};
export const updateNewMessageBodyCreatorAC = (text: string) => {
  return {
    type: UPDATE_NEWPOSTTEXT,
    newMessageText: text,
  } as const;
};
