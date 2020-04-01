import styled from 'styled-components';

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

export const Table = styled.div`
  padding-top: 50px;

  > section {
    display: grid;
    padding-left: 25px;
    padding-right: 13px;
    grid-template-columns: 1fr 2fr 3fr 3fr 3fr 1fr;
    margin-bottom: 15px;
    margin-left: 30px;
    margin-right: 60px;

    strong:last-child {
      text-align: right;
    }
    strong {
      font-size: 16px;
      color: #444;
    }
  }
  > div + div {
    margin-top: 20px;
  }
`;
