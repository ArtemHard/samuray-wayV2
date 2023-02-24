import React from "react";
import {store} from "./redux/redux-store";
import App from "./App";

type PropsType={
    store:any
    children:React.ReactNode
}

export const StoreContext=React.createContext(store)

export const ContextProvider=(props:PropsType)=>{
    return(
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
        )
  }