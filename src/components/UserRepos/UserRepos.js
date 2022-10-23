import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import UserReposLayout from "./UserReposLayout";
import { fetchUserRepos } from "../../store/userReposSlice";

const UserRepos = () => {
  const dispatch = useDispatch();

  const { userReposList, isLoading } = useSelector((state) => state.userRepos);
  const { userData } = useSelector((state) => state.userData);

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(4);

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
      isLoading={isLoading}
      repos={public_repos}
      setCurrentPage={setCurrentPage}
      indexOfFirstRepo={indexOfFirstRepo}
      currentQuantityRepos={currentQuantityRepos}
      totalPages={totalPages}
    />
  );
};

export default UserRepos;
