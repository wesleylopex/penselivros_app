import styled from 'styled-components/native';

import appColors from "../../../global/appColors"

export const ProfileContainer = styled.View`
  flex: 1;
  background-color: ${appColors.darkColor};
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const UserImageContainer = styled.View`
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 142px;
  height: 142px;
  border-radius: 100px;
  margin-bottom: 16px;
`;

export const UserInformationsContainer = styled.View`
  padding-top: 32px;
`;

export const UserInformationItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;
`;

export const SchoolInformationItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;
`;

