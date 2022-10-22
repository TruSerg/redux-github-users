import { useSelector } from "react-redux";

import UserDataLayout from "./UserDataLayout";

const UserData = ({ currentPage, reposPerPage, setCurrentPage }) => {
  const { userData, error, isLoading } = useSelector((state) => state.userData);

  const { avatar_url, name, html_url, login, followers, following } = userData;

  return (
    <UserDataLayout
      currentPage={currentPage}
      reposPerPage={reposPerPage}
      setCurrentPage={setCurrentPage}
      avatarUrl={avatar_url}
      name={name}
      htmlUrl={html_url}
      login={login}
      followers={followers}
      following={following}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default UserData;
