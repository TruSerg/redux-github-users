import style from "./StartSearchingArea.module.scss";
import sprite from "../../static/sprite.svg";

const StartSearchingAreaLayout = () => {
  return (
    <div className={style.startSearchWrapper}>
      <div className={style.startSearchBody}>
        <svg className={style.startSearchIcon}>
          <use href={sprite + "#i-start-search"} />
        </svg>
        <p className={style.startSearchText}>
          Start with searching a GitHub user
        </p>
      </div>
    </div>
  );
};

export default StartSearchingAreaLayout;
