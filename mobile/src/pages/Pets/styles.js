import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex:1;
	margin: 50px 5px;
`;

export const Logo = styled.Image`
  width: 20%;
  height: 75px;
`;

export const HeaderView = styled.View`
  flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderText = styled.Text`
	margin-right: 50px;
	font-size: 22px;
	font-weight: bold;
	color: #d29dc9;
`;

export const Line = styled.View`
  border: 1px solid #ddd;
  width: 100%;
  margin-top: 10px;
`;

export const PetList = styled.FlatList.attrs({
	showsHorizontalScrollIndicator: false
})`
	margin-top: 20px;
`;

export const Pet = styled.View`
  padding: 20px;
	border-radius: 8px;
	margin-bottom: 16px;
  flex-direction: row;
  background: #f5f5f5;
`;

export const Label = styled.Text`
  font-size: 16px;
	color: #41414d;
	font-weight: bold;
`;

export const PetsInfo = styled.Text`
  margin-top: 8px;
	font-size: 16px;
	margin-bottom: 4px;
	color: #737380;
`;

export const Info = styled.Text`
  margin-top: 8px;
	font-size: 16px;
	margin-bottom: 4px;
	color: #737380;
	max-width: 200px;
`;

export const PetImg = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-self: center;
`;

export const ViewInfo = styled.View`
  margin-left: 15px;
`;

export const ViewButton = styled.View`
	margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Action = styled.TouchableOpacity`
	border-radius: 8px;
	height: 50px;
	width: 48%;
	justify-content: center;
	align-items: center;
`;