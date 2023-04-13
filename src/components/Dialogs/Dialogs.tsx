import styled from "styled-components";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { useForm } from "react-hook-form";
import { ForDialogsProps } from "./DialogsContainer";
import { WithRouterProps } from "../../hocs/withRouter";
import { CommonForm } from "../../common/CommonForm";

// type StateType = {
//   state: messagesPageType;
//   isAuth: boolean;
//   onSendmessageClickkhandler: () => void;
//   onNewMessageChange: (newMessage: string) => void;
// };

type DialogsPropsType = ForDialogsProps & WithRouterProps;
export const Dialogs = (props: DialogsPropsType) => {
  // const newMessageBody = props.state.newMessageText;
  const dialogs = props.state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });
  const messages = props.state.messages.map((m) => {
    return <Message key={m.id} message={m.message} />;
  });

  const onSendmessageClickkhandler = (newMessageBody: string) => {
    props.onSendmessageClickkhandler(newMessageBody);
  };

  return (
    <Wrapper>
      <Left>{dialogs}</Left>
      <Right>
        {messages}
        <CommonForm
          onSubmitHandler={onSendmessageClickkhandler}
          textArea={false}
          maxLength={20}
        />
      </Right>
    </Wrapper>
  );
};
// type AddMessageFormPropsType = {
//   onSendmessageClickkhandler: (newMessageBody: string) => void;
// };

// type FormDataType = {
//   newMessage: string;
// };
// const AddMessageForm = (props: AddMessageFormPropsType) => {
//   const { register, handleSubmit, reset } = useForm<FormDataType>();

//   const onSubmit = handleSubmit((data) => {
//     props.onSendmessageClickkhandler(data.newMessage);
//     reset();
//   });
//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <textarea {...register("newMessage", { required: true })} />
//       </div>
//       <div>
//         <button>Add</button>
//       </div>
//     </form>
//   );
// };

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  background-color: steelblue;
  width: 50%;
`;

const Right = styled.div`
  background-color: #334b9b;
  width: 50%;
  color: white;
`;
