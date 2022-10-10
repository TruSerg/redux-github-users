import Container from "../Container/Container";
import UserNotFoundArea from "../UserNotFoundArea/UserNotFoundArea";
import Loader from "../Loader/Loader";
import UserRepos from "../UserRepos/UserRepos";

import style from "./UserData.module.scss";
import sprite from "../../static/sprite.svg";

const UserDataLayout = ({
  avatarUrl,
  name,
  htmlUrl,
  login,
  followers,
  following,
  error,
  isLoading,
}) => {
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <UserNotFoundArea />
          ) : (
            <div className={style.userWrapper}>
              <div>
                <img
                  className={style.userImg}
                  src={avatarUrl}
                  alt="user photo"
                />
              </div>
              <div>
                <p className={style.userName}>{name}</p>
                <a target="_blank" rel="noreferrer" href={htmlUrl}>
                  <p className={style.userLogin}>{login}</p>
                </a>
                <div className={style.userSocial}>
                  <p className={style.userFollowers}>
                    <svg className={style.userFollowersIcon}>
                      <use href={sprite + "#i-followers"} />
                    </svg>
                    {followers} followers
                  </p>
                  <p className={style.userfollowing}>
                    <svg className={style.userFollowingIcon}>
                      <use href={sprite + "#i-following"} />
                    </svg>
                    {following} following
                  </p>
                </div>
              </div>
              <UserRepos />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default UserDataLayout;
