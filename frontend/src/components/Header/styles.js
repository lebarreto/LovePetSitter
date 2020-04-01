import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #f5f5f5;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d3c6cd;

  nav {
    display: flex;
    align-items: center;
    img {
      top: 19px;
      width: 12%;
      height: 70px;
      opacity: 1;
      padding-right: 20px;
    }
    hr {
      top: 16px;
      left: 195px;
      width: 1px;
      height: 32px;
      background: #dddddd 0% 0% no-repeat padding-box;
      opacity: 1;
    }
    a {
      top: 22px;
      left: 226px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      font-weight: 500;
      opacity: 1;
      padding-left: 40px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #666;
      letter-spacing: 0;
      opacity: 1;
    }
    button {
      color: #cf298d;
      letter-spacing: 0;
      font-weight: bold;
      background: none;
      border: 0;
      font-size: 14px;
    }
  }
`;
