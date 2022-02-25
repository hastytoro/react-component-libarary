import React, { useState } from 'react';
import styled from 'styled-components';
import { Check } from 'react-feather';

const App = () => (
  <AlertMessage>Thanks for participating in our survey!</AlertMessage>
);

const AlertMessage = ({ children }) => (
  <Wrapper>
    <IconWrapper>
      <Check />
    </IconWrapper>
    <Heading>{children}</Heading>
  </Wrapper>
);

const Wrapper = styled.div`
  /* main Flexbox container */
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 20px hsl(0deg 0% 0% / 0.35);
  border-radius: 4px;
  padding: 8px;
  gap: 8px;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: forestgreen;
  color: white;
  border: 2px solid hsla(120, 61%, 25%, 1);
  border-radius: 50%;
  /* centering react feather icon with sub-Flexbox */
  display: flex;
  align-items: center;
  justify-content: center;
  /* prevent default shrinking of flex child item */
  flex-shrink: 0;
`;

const Heading = styled.div`
  flex-grow: 1;
`;

export default AlertMessage;
