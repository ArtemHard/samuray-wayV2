import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
