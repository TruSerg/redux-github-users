import { useSelector } from "react-redux";

import UserReposLayout from "./UserReposLayout";

const UserRepos = () => {
  const { userReposList } = useSelector((state) => state.userRepos);
  const { userData } = useSelector((state) => state.userData);

  const { public_repos } = userData;

  return <UserReposLayout userReposList={userReposList} repos={public_repos} />;
};

export default UserRepos;
