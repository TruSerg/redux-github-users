import { useState } from "react";
import { useDispatch } from "react-redux";

import FormLayout from "./FormLayout";
import { fetchUserData } from "../../../store/userDataSlice";
import { fetchUserRepos } from "../../../store/userReposSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [inputSearchUserName, setInputSearchUserName] = useState("");

  const handleUserSearch = (e) => {
    setInputSearchUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchUserData(inputSearchUserName));
    dispatch(fetchUserRepos(inputSearchUserName));

    setInputSearchUserName("");
  };

  return (
    <FormLayout
      submit={handleSubmit}
      inputValue={inputSearchUserName}
      handleChange={handleUserSearch}
    />
  );
};

export default Form;
