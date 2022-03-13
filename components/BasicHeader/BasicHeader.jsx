import React from 'react';
import styled from 'styled-components';

const App = () => <BasicHeader />;

const BasicHeader = () => (
  <Wrapper>
    <Logo>Logo (auto margin here)</Logo>
    <AuthButton>Log in</AuthButton>
    <AuthButton>Sign up</AuthButton>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
const Logo = styled.a`
  font-size: 2rem;
  margin-right: auto; /* toggle this property */
`;

const AuthButton = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
    background: white;
    color: black;
    border: 2px black solid;
  }
`;

export default BasicHeader;
