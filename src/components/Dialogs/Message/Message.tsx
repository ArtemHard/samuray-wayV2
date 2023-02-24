import style from "../Dialogs.module.css";
import { FC } from "react";

type MessagePropsType = { message: string; className: string };
const Message: FC<MessagePropsType> = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};

export default Message;
