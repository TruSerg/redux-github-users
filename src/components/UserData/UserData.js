import { useSelector } from "react-redux";

import UserDataLayout from "./UserDataLayout";

const UserData = () => {
  const { userData, error, isLoading } = useSelector((state) => state.userData);

  return (
    <UserDataLayout userData={userData} error={error} isLoading={isLoading} />
  );
};

export default UserData;
