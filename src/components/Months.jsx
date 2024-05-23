import React from 'react';
import styled from 'styled-components';

const Months = () => {
  const Months = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  `;

  const MonthBtn = styled.button`
    width: 100px;
    height: 60px;
    text-align: center;
    font-size: 18px;
    background-color: #db8b00;
    color: white;
    border: none;
    border-radius: 7px;
  `;

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

  return (
    <Section>
      <Months>
        <MonthBtn background-color="#db8b00">1월</MonthBtn>
        <MonthBtn>2월</MonthBtn>
        <MonthBtn>3월</MonthBtn>
        <MonthBtn>4월</MonthBtn>
        <MonthBtn>5월</MonthBtn>
        <MonthBtn>6월</MonthBtn>
        <MonthBtn>7월</MonthBtn>
        <MonthBtn>8월</MonthBtn>
        <MonthBtn>9월</MonthBtn>
        <MonthBtn>10월</MonthBtn>
        <MonthBtn>11월</MonthBtn>
        <MonthBtn>12월</MonthBtn>
      </Months>
    </Section>
  );
};

export default Months;
