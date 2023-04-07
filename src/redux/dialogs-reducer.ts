import {
  DialogsType,
  MessageType,
} from "./types/reducersTypes/dialogsReducerTypes";
const SEND_MESSAGE = "ADD-NEWPOSTTEXT";
const UPDATE_NEWPOSTTEXT = "UPDATE-NEWPOSTTEXT";

export type messagesPageType = {
  messages: MessageType[];
  dialogs: DialogsType[];
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
};

export const DialogsReducer = (
  state = initialState,
  action: ActionTypes
): messagesPageType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newPostText = {
        id: Date.now(),
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newPostText],
      };
    }
    default:
      return state;
  }
};

type ActionTypes = ReturnType<typeof sendMessageAC>;
export const sendMessageAC = (newMessageBody: string) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  } as const;
};
