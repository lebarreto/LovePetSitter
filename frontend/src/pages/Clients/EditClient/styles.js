import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
  opacity: 1;
  justify-content: center;
  flex: 1;
`;

export const ClientHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 30px;
  color: #444444;

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin-right: 60px;
    color: #444444;
  }
`;

export const FormClient = styled.div`
  width: 930px;
  height: 650px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  margin-top: 20px;
  margin-left: 20%;

  div {
    padding-top: 20px;
    padding-left: 20px;

    label {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }
    input {
      margin-top: 10px;
      width: 890px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;
      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  .divUf {
    padding-top: 20px;
    padding-left: 20px;

    p {
      width: 37px;
      height: 19px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      font-size: 16px;
      font-weight: bold;
    }
    input {
      margin-top: 10px;
      width: 890px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      padding-left: 10px;
      color: #999;
      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }
  }

  button {
    margin-left: 300px;
    margin-top: 30px;
    height: 44px;
    width: 300px;
    background: #d29dc9;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#d29dc9')};
    }
  }
`;
