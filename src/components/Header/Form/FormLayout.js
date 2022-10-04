import style from "./Form.module.scss";
import sprite from "../../../static/sprite.svg";

const FormLayout = () => {
  return (
    <form className={style.form}>
      {/*onSubmit={handleSubmit}>*/}
      <svg className={style.formIcon}>
        <use href={sprite + "#i-search"} />
      </svg>
      <input
        className={style.formInput}
        placeholder="Enter GitHub username"
        // value={inputSearchUserName}
        type="text"
        // onChange={handleChange}
      />
    </form>
  );
};

export default FormLayout;
