import React from 'react';
import styled from 'styled-components';

const Inputs = () => {
  const Section = styled.section`
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-end;
    display: flex;
    justify-content: center;
    border-radius: 18px;
    padding: 20px;
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    min-width: 120px;
  `;

  const Input = styled.input`
    width: 160px;
    height: 30px;
    border: 1px solid #cacaca;
    border-radius: 7px;
  `;

  const P = styled.label`
    text-align: left;
    margin-bottom: 5px;
    font-size: 14px;
  `;

  const SaveBtn = styled.button`
    background-color: #bd4c4c;
    color: white;
    height: 34px;
    border: none;
    border-radius: 7px;
    padding: 8px 20px;
  `;

  return (
    <Section>
      <Box>
        <P>날짜</P>
        <Input type="date" />
      </Box>
      <Box>
        <P>항목</P>
        <Input placeholder="지출 항목" />
      </Box>
      <Box>
        <P>금액</P>
        <Input placeholder="지출 금액" />
      </Box>
      <Box>
        <P>내용</P>
        <Input placeholder="지출 내용" />
      </Box>
      <SaveBtn>저장</SaveBtn>
    </Section>
  );
};

export default Inputs;
