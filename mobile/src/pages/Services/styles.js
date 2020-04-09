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

export const ServiceHeader = styled.Text`
	font-size: 18px;
	color: #444;
	margin-top: 16px;
  font-weight: bold;
`;

export const ServiceDescription = styled.Text`
	font-size: 16px;
	color: #737380;
	margin-top: 16px;
`;

export const MoreLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const MoreLinkText = styled.Text`
  color: #d29dc9;
  font-weight: bold;
  font-size: 18px;
`;