// List.jsx
import React from 'react';
import {
  ListItem,
  ListP,
  P,
  ListSection,
  SpanFirstChild,
  SpanSecondChild,
  SpanLastChild,
  StyledLink,
  ListContentLeft,
  ListContentRight,
  ListNoContent,
} from '../styled';

const List = ({ selectedMonth, entries, onSelectEntry }) => {
  return (
    <ListSection>
      {entries.length > 0 ? (
        entries.map(({ id, date, item, amount, description }) => (
          <ListItem key={id}>
            <StyledLink to={`/Works/${id}`} onClick={() => onSelectEntry(id)}>
              <ListContentLeft>
                <P>{date}</P>
                <ListP>
                  <SpanFirstChild>{item}</SpanFirstChild> - <SpanSecondChild>{description}</SpanSecondChild>
                </ListP>
              </ListContentLeft>
              <ListContentRight>
                <SpanLastChild>{amount}원</SpanLastChild>
              </ListContentRight>
            </StyledLink>
          </ListItem>
        ))
      ) : (
        <ListNoContent>
          <ListP>지출이 없습니다.</ListP>
        </ListNoContent>
      )}
    </ListSection>
  );
};

export default List;
