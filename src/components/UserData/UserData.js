import { useSelector } from "react-redux";

import UserDataLayout from "./UserDataLayout";

const UserData = ({ isUserDataLoaded }) => {
  const { userData, error, isLoading } = useSelector((state) => state.userData);
  const { avatar_url, name, html_url, login, followers, following } = userData;

  return (
    <UserDataLayout
      avatarUrl={avatar_url}
      name={name}
      htmlUrl={html_url}
      login={login}
      followers={followers}
      following={following}
      error={error}
      isLoading={isLoading}
      isUserDataLoaded={isUserDataLoaded}
    />
  );
};

export default UserData;
