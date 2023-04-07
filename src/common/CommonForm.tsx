import { SubmitHandler, useForm } from "react-hook-form";

type FormDataType = {
  newMessage: string;
};

type AddMessageFormMyPostsType = {
  onSubmitHandler: (newMessage: string) => void;
  textArea: boolean;
};

export const CommonForm = ({
  onSubmitHandler,
  textArea,
}: AddMessageFormMyPostsType) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>();

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    onSubmitHandler(data.newMessage);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {textArea ? (
          <textarea
            cols={30}
            rows={10}
            placeholder={"Enter your message"}
            {...register("newMessage", {
              required: true,
            })}
          />
        ) : (
          <input
            placeholder={"Enter your message"}
            {...register("newMessage", {
              required: true,
            })}
          />
        )}
        {errors.newMessage && <div>{errors.newMessage?.message}</div>}
      </div>
      <input type='submit' />
    </form>
  );
};
