import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(isLoading);
  console.log(isAuthenticated);
  console.log(user);
  return (
      <div style={{textAlign : "center"}} >
        {isAuthenticated? <div><img
          src={user.picture}
          alt="Profile"
          className={"nav-user-profile rounded-circle"}
          width="50"
        /><LogoutButton/></div> :   <LoginButton/> }
      </div>
  );
};

export default Profile;