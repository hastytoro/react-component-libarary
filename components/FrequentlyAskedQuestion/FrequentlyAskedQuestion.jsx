import React from 'react';
import styled from 'styled-components';

const FrequentlyAskedQuestion = ({ question, answer }) => {
  return (
    <Wrapper>
      <Question>{question}</Question>
      <Answer>{answer}</Answer>
    </Wrapper>
  );
};

const Wrapper = styled.details`
  font-size: 0.8rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;
  padding: 5px;
  border: 2px solid;
  border-radius: 4px;
`;

const Question = styled.summary`
  cursor: pointer;
  padding: 16px;
  /* outline-offset: 5px; */
`;

const Answer = styled.div`
  background: hsl(0deg 0% 80%);
  border-radius: 4px;
  padding: 16px;
  font-weight: bold;
  font-style: italic;
`;

export default FrequentlyAskedQuestion;
