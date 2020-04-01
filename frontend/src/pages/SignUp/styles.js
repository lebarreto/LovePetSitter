import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 515px;
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    img {
      width: 20%;
      height: 20%;
      margin: 20px auto;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #444444;
      margin: 0 30px 10px;

      &::placeholder {
        color: rgba(2, 0, 2, 0.1);
      }
    }

    p {
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
      padding-left: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: bold;
    }

    span {
      color: #ab59c1;
      align-self: flex-start;
      margin: 0 30px 10px;
      font-weight: bold;
    }

    button {
      margin: 10px 30px 0;
      height: 44px;
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

    a {
      color: #41414d;
      font-weight: bold;
      display: flex;
      align-items: center;
      text-decoration: none;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      margin-left: 30px;

      &:hover {
        opacity: 1;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;
