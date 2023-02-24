import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

export type  PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type profilePageType = {
    posts: PostType[]
    newPostText: string
}
export type messagesPageType = {
    messages: MessageType[]
    dialogs: DialogsType[]
    newMessageText: string
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType

}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: (state: StateType) => void,
    dispatch: (action: any) => void,
    subscribe: (observer: Function) => void
}

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi, how are you',
                    likesCount: 0
                },
                {
                    id: 2,
                    message: 'I`ts my first post',
                    likesCount: 13
                },
            ],
            newPostText: 'it-Kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Igor'
                },
                {
                    id: 2,
                    name: 'Olga'
                },
                {
                    id: 3,
                    name: 'Sasha'
                },
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'How are you?'
                },
                {
                    id: 3,
                    message: 'Hellow'
                },
            ],
            newMessageText: ''
        }
    },
    _callSubscriber(state: StateType) {
        console.log('state was rerendered')
    },
    getState() {
        return this._state
    },
    subscribe(observer: Function) {
        // @ts-ignore
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        this._state.profilePage=ProfileReducer(this._state.profilePage,action)
        this._state.dialogsPage=DialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber(store._state)

    }
}


// @ts-ignore
Window.store = store

export default store
