import style from "./UserNotFoundArea.module.scss";
import sprite from "../../static/sprite.svg";

const UserNotFoundAreaLayout = () => {
  return (
    <div className={style.UserNotFoundWrapper}>
      <div className={style.userNotFoundBody}>
        <svg className={style.userNotFoundIcon}>
          <use href={sprite + "#i-user-not-found"} />
        </svg>
        <p className={style.userNotFoundText}>User not found</p>
      </div>
    </div>
  );
};

export default UserNotFoundAreaLayout;
