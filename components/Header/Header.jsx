import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const Header = () => (
  <Wrapper>
    <InnerWrapper>
      <Logo href="/">Logo</Logo>
      <SearchInput />
      <DesktopNav>
        <NavList>
          <li>
            <NavAncher href="">Store</NavAncher>
          </li>
          <li>
            <NavAncher href="">Log In</NavAncher>
          </li>
          <li>
            <NavAncher href="">Sign Up</NavAncher>
          </li>
        </NavList>
      </DesktopNav>
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.header`
  background-color: var(--color-background);
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: 48px;
  padding: 16px 32px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 750;
  color: inherit;
  text-decoration: none;
`;

const DesktopNav = styled.nav`
  display: none;
  margin-left: auto;

  @media (min-width: 960px) {
    display: revert;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
`;
const NavAncher = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 480;
`;

const SearchInput = (props) => {
  return (
    <SearchWrapper {...props}>
      <Input placeholder="..." />
      <SubmitButton>
        <Search size={16} /> {/* react-feather */}
      </SubmitButton>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  flex: 1;
  /* its own children are in Position layout */
  position: relative;
  min-width: 300px;
  height: 2em;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: var(--color-gray-100);
  border-radius: 99999px;
  border: none;
  padding: 0 16px;
  outline-offset: 4px;
  font-size: 1rem;
  &:focus {
    background: var(--color-gray-200);
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: grid;
  padding-right: 8px;
  background: transparent;
  outline-offset: 4px;
  cursor: pointer;
  /* centering icon */
  place-content: center;
  border: none;
`;

export default Header;
