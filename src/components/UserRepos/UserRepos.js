import { useDispatch, useSelector } from "react-redux";

import UserReposLayout from "./UserReposLayout";
import { useEffect } from "react";
import { fetchUserRepos } from "../../store/userReposSlice";

const UserRepos = ({ currentPage, setCurrentPage, reposPerPage }) => {
  const dispatch = useDispatch();

  const { userReposList } = useSelector((state) => state.userRepos);
  const { userData } = useSelector((state) => state.userData);

  const { public_repos, login } = userData;

  const indexOfLastRepo = currentPage * reposPerPage;

  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const currentQuantityRepos = indexOfFirstRepo + 1 * userReposList.length;

  const totalPages = Math.ceil(public_repos / reposPerPage);

  useEffect(() => {
    dispatch(fetchUserRepos([login, reposPerPage, currentPage]));
  }, [currentPage]);

  return (
    <UserReposLayout
      userReposList={userReposList}
      repos={public_repos}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      indexOfFirstRepo={indexOfFirstRepo}
      currentQuantityRepos={currentQuantityRepos}
      totalPages={totalPages}
    />
  );
};

export default UserRepos;
