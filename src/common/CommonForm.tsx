import { SubmitHandler, useForm } from "react-hook-form";

type FormDataType = {
  newMessage: string;
};

type AddMessageFormMyPostsType = {
  onSubmitHandler: (newMessage: string) => void;
  textArea: boolean;
  maxLength: number;
};

export const CommonForm = ({
  onSubmitHandler,
  textArea,
  maxLength,
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
            style={borderColorForInput(errors.newMessage?.type)}
            cols={30}
            rows={10}
            placeholder={"Enter your message"}
            {...register("newMessage", {
              required: "Text is requierd",
              maxLength: maxLength,
            })}
          />
        ) : (
          <input
            style={borderColorForInput(errors.newMessage?.type)}
            placeholder={"Enter your message"}
            {...register("newMessage", {
              required: "Text is requierd",
              maxLength: maxLength,
            })}
          />
        )}
        {errors.newMessage?.type === "required" && (
          <div style={{ color: "red" }}>{errors.newMessage.message}</div>
        )}
        {errors.newMessage?.type === "maxLength" && (
          <div style={{ color: "red" }}>{"Max " + maxLength + " symbols"}</div>
        )}
      </div>
      <input type='submit' />
    </form>
  );
};

export const borderColorForInput = (errorsType: string | undefined) => {
  if (errorsType === "required" || errorsType === "maxLength")
    return { border: "2px solid red", outline: "none" };
  else return {};
};
