import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Contact, ProfileDataType } from "./ProfileInfo";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { profileApi } from "../../../api/profileApi";
import { selectorAuthId } from "../../../redux/selectors";
import { saveProfile } from "../../../redux/actions/profileAC";
import { useState } from "react";
import {
  ProfileContacts,
  ProfileType,
} from "../../../redux/types/reducersTypes/profileReducerType";

export type ProfileDataFormInputsType = {
  aboutMe: string;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  //   contacts?: ProfileContacts;
  //   userId: number;
  //   photos: ProfilePhotos;
};

export type ContactsKey = keyof ProfileType["contacts"];

export const ProfileDataForm = ({
  profile,
  setEditMode,
}: Omit<ProfileDataType, "isOwner" | "activateMode"> & {
  setEditMode: (value: React.SetStateAction<boolean>) => void;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileDataFormInputsType>();
  const [isChecked, setIsChecked] = useState(profile.lookingForAJob);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ProfileDataFormInputsType> = (data) => {
    console.log(data);
    dispatch(saveProfile(data));
    setEditMode(false);
  };

  const keys = Object.keys(profile.contacts) as ContactsKey[];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type='submit' value={"save"} />
      </div>

      <div>
        <b>Full name</b>:{" "}
        <input
          defaultValue={profile.fullName}
          {...register("fullName", { required: true })}
        />
      </div>
      <div>
        <b>Looking for a job</b>:
        <input type={"checkbox"} {...register("lookingForAJob")} />
      </div>

      <div>
        <b>My professional skills</b>:
        <textarea
          defaultValue={profile.lookingForAJobDescription}
          {...register("lookingForAJobDescription", { required: true })}
        />
      </div>

      <div>
        <b>About me</b>:
        <textarea
          defaultValue={profile.aboutMe}
          {...register("aboutMe", { required: true })}
        />
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {keys.map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              //   @ts-ignore
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </form>
  );
};
