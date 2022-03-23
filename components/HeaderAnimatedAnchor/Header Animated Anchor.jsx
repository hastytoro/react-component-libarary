import React from 'react';
import styled from 'styled-components/macro';

const App = () => <NavHeader />;

const NavHeader = () => {
  return (
    <Header>
      <Logo class="logo" href="/">
        Logo
      </Logo>
      <nav>
        <NavList>
          <li>
            <NavLink href="/">One</NavLink>
          </li>
          <li>
            <NavLink href="/">Two</NavLink>
          </li>
          <li>
            <NavLink href="/">Three</NavLink>
          </li>
        </NavList>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  /* flex configuration  */
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: white;
  padding: 16px 32px;
  /* cosmetic shadow line */
  filter: drop-shadow(2px 4px 32px hsla(0, 0%, 0%, 0.3));
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

const NavList = styled.ul`
  /* sub-Flexbox container */
  display: flex;
  gap: 16px;
  list-style-type: none;
  padding: 0;
`;

// Update and add your 2nd variant!
const NavLink = ({ href, children }) => (
  <NavAnchor href={href}>
    {children}
    <RevealedVariant>{children}</RevealedVariant>
  </NavAnchor>
);

const NavAnchor = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.25rem;
  display: block;
  position: relative;
`;

const RevealedVariant = styled.span`
  position: absolute;
  color: hsl(333deg 100% 50%);
  top: 0;
  left: 0;
  /* exiting/default animation */
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 1000ms;

  ${NavAnchor}:hover & {
    /* entering/hover animation */
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 50ms; /* entering */
  }
`;

export default NavHeader;
