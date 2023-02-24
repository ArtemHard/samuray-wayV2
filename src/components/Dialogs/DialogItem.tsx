import React from 'react';
import {NavLink} from "react-router-dom";

type PropsType={
    name:string
    id:number
}

export const DialogItem = (props:PropsType) => {
    let path=`/dialogs/${props.id}`
    return (
        <div><NavLink to={path}>{props.name}</NavLink></div>
    );
};

