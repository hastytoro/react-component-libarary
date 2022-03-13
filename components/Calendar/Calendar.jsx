import React from 'react';
import styled from 'styled-components/macro';

const App = () => <Calendar />;

const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const Calendar = () => (
  <Wrapper>
    {DAYS.map((day) => (
      <Day>{day}</Day>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  background: black;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  border: 3px solid;
  height: 100vh; /* toggle */
`;

const Day = styled.div`
  border: 2px solid;
  background: white;
  border-radius: 4px;
  /* centering */
  display: grid;
  place-content: center;
`;

export default Calendar;
