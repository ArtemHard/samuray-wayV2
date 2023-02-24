import style from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.img}
          src='https://store-images.s-microsoft.com/image/apps.4083.14191174512742283.25b58903-5b4d-47c0-959c-c79a5aabf46c.17e473bf-b171-4bc5-b00e-f1a6f54977e1'
          alt='forest'
        />
      </div>
      <div className={style["description-block"]}>ava + description</div>
    </div>
  );
};
