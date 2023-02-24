import React from 'react';

type PropsType={
    message:string
}

export const Message = (props:PropsType) => {
    return (
        <div>{props.message}</div>
    );
};
