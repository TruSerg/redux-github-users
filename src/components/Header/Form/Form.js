import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import FormLayout from "./FormLayout";
import { fetchUserData } from "../../../store/userDataSlice";

const Form = ({ setIsUserDataLoaded }) => {
  const dispatch = useDispatch();

  const [inputSearchUserName, setInputSearchUserName] = useState("");

  const handleUserSearch = (e) => {
    setInputSearchUserName(e.target.value);
  };

  useEffect(() => {
    setIsUserDataLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchUserData(inputSearchUserName));

    setInputSearchUserName("");
    setIsUserDataLoaded(false);
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
