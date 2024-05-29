// Works.jsx
import React, { useEffect, useState } from 'react';
import { Main, Section, RetouchBtn, RemoveBtn, BackBtn, P, Input } from '../styled';
import { useNavigate } from 'react-router-dom';

const Works = ({ entries, id }) => {
  const navigate = useNavigate();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const foundEntry = entries.find((entry) => entry.id === id);
    setEntry(foundEntry);
  }, [id, entries]);

  if (!entry) {
    return <div>항목을 찾을 수 없습니다.</div>;
  }

  const { date, item, amount, description } = entry;

  return (
    <Main>
      <Section>
        <div>
          <P>날짜</P>
          <Input value={date} readOnly />
        </div>
        <div>
          <P>항목</P>
          <Input value={item} readOnly />
        </div>
        <div>
          <P>금액</P>
          <Input value={amount} readOnly />
        </div>
        <div>
          <P>내용</P>
          <Input value={description} readOnly />
        </div>
        <RetouchBtn>수정</RetouchBtn>
        <RemoveBtn>삭제</RemoveBtn>
        <BackBtn
          onClick={() => {
            navigate('/');
          }}
        >
          돌아가기
        </BackBtn>
      </Section>
    </Main>
  );
};

export default Works;
