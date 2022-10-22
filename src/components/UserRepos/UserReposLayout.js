import Pagination from "../Pagination/Pagination";
import RepositoriesIsEmptyArea from "../RepositoriesIsEmptyArea/RepositoriesIsEmptyArea";

import style from "./UserRepos.module.scss";

const UserReposLayout = ({
  userReposList,
  repos,
  setCurrentPage,
  indexOfFirstRepo,
  currentQuantityRepos,
  totalPages,
}) => {
  return (
    <div className={style.reposWrapper}>
      {userReposList.length ? (
        <>
          <h3 className={style.reposTitle}>Repositories ({repos})</h3>
          {userReposList.map(({ id, name, description, html_url }) => {
            return (
              <div className={style.userRepo} key={id}>
                <a target="_blank" rel="noreferrer" href={html_url}>
                  <p className={style.repoName}>{name}</p>
                </a>
                <p className={style.repoDescription}>{description}</p>
              </div>
            );
          })}
          {repos > 3 && (
            <div className={style.paginationArea}>
              <span className={style.paginationData}>{`${
                indexOfFirstRepo + 1
              } - ${currentQuantityRepos} of ${repos} items`}</span>
              <Pagination pages={totalPages} currentPage={setCurrentPage} />
            </div>
          )}
        </>
      ) : (
        <RepositoriesIsEmptyArea />
      )}
    </div>
  );
};

export default UserReposLayout;