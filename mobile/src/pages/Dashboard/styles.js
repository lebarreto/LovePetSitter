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

export const AgendaList = styled.FlatList.attrs({
	showsHorizontalScrollIndicator: false
})`
	margin-top: 20px;
`;

export const Agenda = styled.View`
  padding: 24px;
	border-radius: 8px;
	background-color: #f5f5f5;
	margin-bottom: 16px;
  opacity: ${props => (props.past ? 0.5 : 1)};
`;

export const Label = styled.Text`
  font-size: 18px;
	color: #41414d;
	font-weight: bold;
`;

export const AgendaDate = styled.Text`
  margin-top: 8px;
	font-size: 16px;
	margin-bottom: 24px;
	color: #737380;
`;

export const AgendaName = styled.Text`
  margin-top: 8px;
	font-size: 16px;
	margin-bottom: 24px;
	color: #737380;
`;

