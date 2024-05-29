import React from 'react';
import { Section, Months, MonthBtn } from '../styled';

const Calendar = ({ selectedMonth, setSelectedMonth }) => {
  const handleMonthClick = (month) => {
    const paddedMonth = month.padStart(2, '0');
    setSelectedMonth(paddedMonth);
  };

  return (
    <Section>
      <Months>
        <MonthBtn onClick={() => handleMonthClick('1')} selected={selectedMonth === '01'}>
          1월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('2')} selected={selectedMonth === '02'}>
          2월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('3')} selected={selectedMonth === '03'}>
          3월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('4')} selected={selectedMonth === '04'}>
          4월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('5')} selected={selectedMonth === '05'}>
          5월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('6')} selected={selectedMonth === '06'}>
          6월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('7')} selected={selectedMonth === '07'}>
          7월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('8')} selected={selectedMonth === '08'}>
          8월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('9')} selected={selectedMonth === '09'}>
          9월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('10')} selected={selectedMonth === '10'}>
          10월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('11')} selected={selectedMonth === '11'}>
          11월
        </MonthBtn>
        <MonthBtn onClick={() => handleMonthClick('12')} selected={selectedMonth === '12'}>
          12월
        </MonthBtn>
      </Months>
    </Section>
  );
};

export default Calendar;
