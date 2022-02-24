import React from 'react';
import styled from 'styled-components';
import { Map, Save, ShoppingCart } from 'react-feather';

const App = () => {
  return (
    <>
      <ButtonGroup />
    </>
  );
};

function ButtonGroup() {
  return (
    <Wrapper>
      <IconButton isCurrent icon={<Map />}>
        Navigation
      </IconButton>
      <IconButton icon={<Save />}>Save Route</IconButton>
      <IconButton icon={<ShoppingCart />}>View Cart</IconButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
`;

const IconButton = ({ icon, children, isCurrent, ...delegated }) => {
  return (
    <IconButtonWrapper isCurrent={isCurrent} {...delegated}>
      <Icon isCurrent={isCurrent}>{icon}</Icon>
      {children}
    </IconButtonWrapper>
  );
};

const IconButtonWrapper = styled.button`
  background: white;
  border-radius: 8px;
  border: 2px solid ${(prop) => prop.isCurrent && 'deeppink'};
  width: 90px;
  height: 90px;
  color: ${(prop) => prop.isCurrent && 'deeppink'};
`;

const Icon = styled.span`
  display: block;
  color: ${(prop) => prop.isCurrent && 'deeppink'};
`;

export default ButtonGroup;
