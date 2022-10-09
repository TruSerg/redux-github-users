import style from "./Form.module.scss";
import sprite from "../../../static/sprite.svg";

const FormLayout = ({ submit, inputValue, handleChange }) => {
  return (
    <form className={style.form} onSubmit={submit}>
      <svg className={style.formIcon}>
        <use href={sprite + "#i-search"} />
      </svg>
      <input
        className={style.formInput}
        placeholder="Enter GitHub username"
        value={inputValue}
        type="text"
        onChange={handleChange}
      />
    </form>
  );
};

export default FormLayout;
