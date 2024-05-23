import React from 'react';
import styled from 'styled-components';

const List = () => {
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
      <div>
        <p>지출이 없습니다.</p>
      </div>
    </Section>
  );
};

export default List;
