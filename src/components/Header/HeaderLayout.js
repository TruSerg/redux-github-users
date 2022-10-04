import Container from "../Container/Container";
import Form from "./Form/Form";

import style from "./Header.module.scss";
import sprite from "../../static/sprite.svg";

const HeaderLayout = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <a target="_blank" rel="noreferrer" href="https://github.com">
            <svg className={style.headerGitIcon}>
              <use href={sprite + "#i-git"} />
            </svg>
          </a>
          <Form />
        </div>
      </Container>
    </header>
  );
};

export default HeaderLayout;
