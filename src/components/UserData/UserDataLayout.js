import Container from "../Container/Container";
import UserNotFoundArea from "../UserNotFoundArea/UserNotFoundArea";
import Loader from "../Loader/Loader";

import style from "./UserData.module.scss";
import sprite from "../../static/sprite.svg";

const UserDataLayout = ({ userData, error, isLoading }) => {
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
                  src={userData.avatar_url}
                  alt="user photo"
                />
              </div>
              <div>
                <p className={style.userName}>{userData.name}</p>
                <a target="_blank" rel="noreferrer" href={userData.html_url}>
                  <p className={style.userLogin}>{userData.login}</p>
                </a>
                <div className={style.userSocial}>
                  <p className={style.userFollowers}>
                    <svg className={style.userFollowersIcon}>
                      <use href={sprite + "#i-followers"} />
                    </svg>
                    {userData.followers} followers
                  </p>
                  <p className={style.userfollowing}>
                    <svg className={style.userFollowingIcon}>
                      <use href={sprite + "#i-following"} />
                    </svg>
                    {userData.following} following
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default UserDataLayout;
