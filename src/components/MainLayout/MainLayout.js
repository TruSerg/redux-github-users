import style from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return <div className={style.mainWrapper}>{children}</div>;
};

export default MainLayout;
