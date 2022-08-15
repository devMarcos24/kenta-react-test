import styled from "styled-components";

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 5px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButtonImg = styled.img`
  cursor: pointer;
  max-width: 30px;
  margin-right: 10px;
`;

export const PageTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

export const PageTitleButton = styled.button`
  padding: 10px 5px;

  width: 150px;
  background-color: orange;

  font-size: 16px;
  color: #fff;
  border: 1px solid #999;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
