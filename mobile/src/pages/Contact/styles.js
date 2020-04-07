import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
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

export const ViewButton = styled.View`
	margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Action = styled.TouchableOpacity`
	background-color: #d29dc9;
	border-radius: 8px;
	height: 50px;
	width: 48%;
	justify-content: center;
  margin-bottom: 10px;
	align-items: center;
`;

export const ActionText = styled.Text`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
`;

export const ContactBox = styled.View`
	padding: 24px;
	border-radius: 8px;
	margin-bottom: 16px;
`;

export const ContactDescription = styled.Text`
	font-size: 20px;
	color: #737380;
	margin-top: 16px;
  font-weight: bold;
`;