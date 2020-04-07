import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background: #f5f5f5;
`;

export const Logo = styled.Image`
  width: 40%;
  height: 20%;
  border-radius: 30px;
`;

export const ViewSign = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  width: 250px;
  margin-left: 70px;
  align-items: flex-start;
`;

export const FormInput = styled.TextInput`
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

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #d29dc9;
  font-weight: bold;
  font-size: 18px;
`;

export const ViewButton = styled.View`
	margin-top: 10px;
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
	align-items: center;
`;

export const ActionText = styled.Text`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
`;