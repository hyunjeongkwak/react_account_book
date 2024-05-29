// styled.js
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px auto;
`;

export const Section = styled.section`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;
  border-radius: 18px;
  padding: 20px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

export const Input = styled.input`
  width: 160px;
  height: 30px;
  border: 1px solid #cacaca;
  border-radius: 7px;
`;

export const P = styled.label`
  text-align: left;
  margin-bottom: 13px;
  font-size: 14px;
`;

export const SaveBtn = styled.button`
  background-color: #6672f9;
  color: white;
  height: 34px;
  border: none;
  border-radius: 7px;
  padding: 8px 20px;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background-color: #41499e;
    cursor: pointer;
  }
`;

export const Months = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const MonthBtn = styled.button`
  width: 100px;
  height: 60px;
  text-align: center;
  font-size: 18px;
  background-color: #f5f0b0;
  color: black;
  border: none;
  border-radius: 7px;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    transform: scale(1.07);
    cursor: pointer;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #6672f9;
      color: white;
    `}
`;

export const ListSection = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 18px;
  padding: 20px;
  max-width: 100%;
`;

export const ListItem = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 15px 20px;
  box-shadow: rgb(0, 0, 0, 0.1) 0px 4px 6px;
  width: 715px;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const ListNoContent = styled.div`
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 15px 20px;
  box-shadow: rgb(0, 0, 0, 0.1) 0px 4px 6px;
  width: 715px;
  color: #7f7f7f;
`;

export const ListContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100% - 150px);
`;

export const ListContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 150px;
`;

export const SpanFirstChild = styled.span`
  font-weight: bold;
  color: #6672f9;
  flex-shrink: 0;
  text-decoration: none;
`;

export const SpanSecondChild = styled.span`
  font-weight: bold;
  color: #6672f9;
  flex-shrink: 0;
`;

export const SpanLastChild = styled.span`
  font-weight: bold;
  color: #6672f9;
  flex-shrink: 0;
`;

export const RetouchBtn = styled.button`
  background-color: #777dfa;
  color: white;
  height: 34px;
  border: none;
  border-radius: 7px;
  padding: 8px 20px;
`;

export const RemoveBtn = styled.button`
  background-color: #ea555d;
  color: white;
  height: 34px;
  border: none;
  border-radius: 7px;
  padding: 8px 20px;
`;

export const BackBtn = styled.button`
  background-color: #6f6f6f;
  color: white;
  height: 34px;
  border: none;
  border-radius: 7px;
  padding: 8px 20px;
`;

export const ListP = styled.label`
  text-align: left;
  font-size: 16px;
  margin-top: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
