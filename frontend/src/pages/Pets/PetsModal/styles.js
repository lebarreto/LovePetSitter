import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
  opacity: 1;
  justify-content: center;
  flex: 1;
`;

export const PetHeader = styled.div`
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

export const Modal = styled.div`
  width: 530px;
  background: #d3c6cd 0% 0% no-repeat content-box;
  border-radius: 4px;
  opacity: 1;
  margin-left: 30%;
  margin-top: 50px;

  div {
    margin-bottom: 10px;
    align-items: center;
    margin-left: 170px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 60px;
      align-self: center;
      margin-top: 20px;
    }

    p {
      font-size: 14px;
      color: #666666;
    }

    label {
      font-weight: bold;
      font-size: 22px;
      color: #444444;
      margin-bottom: 15px;
    }
  }
`;
