import React from "react";
import { View } from "react-native";

import { ProfileContainer } from "../styles/styles";

import UserContainer from "./UserContainer";
import UserInformationsList from "./UserInformationsList";

const Profile = () => {
  return (
    <ProfileContainer>
      <UserContainer />

      <UserInformationsList />
    </ProfileContainer>
  );
};

export default Profile;
