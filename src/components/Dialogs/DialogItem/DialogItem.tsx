import style from "../Dialogs.module.css";
import { FC } from "react";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: string;
};
const DialogItem: FC<DialogItemPropsType> = ({ name, id }) => {
  const path = "/dialogs/";
  return (
    <div className={style.dialogs}>
      <NavLink to={path + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
