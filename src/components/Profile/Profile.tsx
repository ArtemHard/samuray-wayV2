import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profilePageType} from "../../redux/store";
import {store} from "../../redux/redux-store";

type StateType = {
    profilePage: profilePageType
}

export const Profile = (props: StateType) => {

    return (
        <div className={'MainContent'}>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>TS</li>
                <li>REACT</li>
            </ul>
            <ProfileInfo/>

            <MyPostsContainer
                //state={props.profilePage}
            />
        </div>
    );
};

