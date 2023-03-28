import React, { ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { messagesPageType } from "../../redux/store";
import {
  WithRouterProps,
  WithRouterType,
} from "../Profile/ProfileContainer/ProfileContainer";

import { useNavigate } from "react-router-dom";
import { PropsForDialogs } from "./DialogsContainer";

type StateType = {
  state: messagesPageType;
  isAuth: boolean;
  onSendmessageClickkhandler: () => void;
  onNewMessageChange: (newMessage: string) => void;
};

// type DialogsPropsType = PropsForDialogs & WithRouterProps;
export const Dialogs = (props: any) => {
  const newMessageBody = props.state.newMessageText;

  const dialogs = props.state.dialogs.map((d: any) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });
  const messages = props.state.messages.map((m: any) => {
    return <Message key={m.id} message={m.message} />;
  });

  const onSendmessageClickkhandler = () => {
    props.onSendmessageClickkhandler();
  };

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onNewMessageChange(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Left>{dialogs}</Left>
      <Right>
        {messages}
        <div>
          <textarea
            placeholder={"Enter your message"}
            value={newMessageBody}
            onChange={onNewMessageChange}
          />
        </div>
        <div>
          <button onClick={onSendmessageClickkhandler}>Add</button>
        </div>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  background-color: steelblue;
  width: 50%;
`;

const Right = styled.div`
  background-color: #1e3786;
  width: 50%;
`;
