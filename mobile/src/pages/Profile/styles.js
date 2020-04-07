import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 50px 5px;
`;

export const Logo = styled.Image`
  width: 20%;
  height: 75px;
`;

export const ViewSign = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  width: 250px;
  margin-left: 70px;
  align-items: flex-start;
`;

export const FormText = styled.Text`
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 16px;
`;

export const FormLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-top: 10px;
`;

export const Line = styled.View`
  border: 1px solid #ddd;
  width: 100%;
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