import style from "./RepositiriesIsEmptyArea.module.scss";

import sprite from "../../static/sprite.svg";

const RepositoriesIsEmptyAreaLayout = () => {
  return (
    <div className={style.reposIsEmptyWrapper}>
      <div className={style.reposIsEmptyBody}>
        <svg className={style.reposIsEmptyIcon}>
          <use href={sprite + "#i-repos-is-empty"} />
        </svg>
        <p className={style.reposIsEmptyText}>Repository list is empty</p>
      </div>
    </div>
  );
};

export default RepositoriesIsEmptyAreaLayout;
