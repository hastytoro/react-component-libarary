import React from 'react';
import styled from 'styled-components';

const App = () => (
  <>
    <Breadcrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/living">Living Room</Crumb>
      <Crumb href="/living/couch">Couches</Crumb>
      <Crumb href="/living/couch/sectional">Sectionals</Crumb>
    </Breadcrumbs>
  </>
);

const Breadcrumbs = ({ children }) => (
  <nav>
    <BreadcrumbsList>{children}</BreadcrumbsList>
  </nav>
);

// Use if your CSS Reset does not remove default styles.
const BreadcrumbsList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Crumb = ({ href, children }) => (
  <CrumbItem>
    <CrumbLink href={href}>{children}</CrumbLink>
  </CrumbItem>
);

const CrumbItem = styled.li`
  display: inline;

  &:not(:first-of-type) {
    margin-left: 12px;
    &::before {
      margin-right: 12px;
      content: '/';
      color: hsl(0, 0%, 75%);
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
    color: deeppink;
    font-weight: bold;
  }
`;

export default Breadcrumbs;
