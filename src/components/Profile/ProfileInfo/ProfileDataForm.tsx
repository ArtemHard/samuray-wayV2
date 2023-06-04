import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Contact, ProfileDataType } from "./ProfileInfo";
import { useAppDispatch } from "../../../hooks/reduxHooks";

type Inputs = {
  aboutMe: string;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;

  //   contacts: ProfileContacts;
  //   userId: number;
  //   photos: ProfilePhotos;
};

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
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert("ACTION, info in console");
    console.log(data);
    setEditMode(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type='submit' value={"save"} />
      </div>

      <div>
        <b>Full name</b>:{" "}
        <input defaultValue={profile.fullName} {...register("fullName")} />
      </div>
      <div>
        <b>Looking for a job</b>:
        <input type={"checkbox"} {...register("lookingForAJob")} />
      </div>

      <div>
        <b>My professional skills</b>:
        <textarea
          defaultValue={profile.lookingForAJobDescription}
          {...register("lookingForAJobDescription")}
        />
      </div>

      <div>
        <b>About me</b>:
        <textarea defaultValue={profile.aboutMe} {...register("aboutMe")} />
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              //@ts-ignore
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </form>
  );
};
