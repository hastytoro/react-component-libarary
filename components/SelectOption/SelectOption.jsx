import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [value, setValue] = useState('default');
  const handleChange = (e) => setValue(e.target.value);
  return (
    <SelectOption value={value} onChange={handleChange}>
      <option value="default">Choose a vehicle</option>
      <option value="Volvo">Volvo</option>
      <option value="Saab">Saab</option>
      <option value="Mercedes">Mercedes</option>
    </SelectOption>
  );
};

const SelectOption = ({ value, onChange, children }) => {
  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Banner>{value === 'default' ? 'Please select a vehicle' : value}</Banner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* width: max-content; */
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Banner = styled.div`
  background-color: hsl(240deg 10% 50% / 0.15);
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
`;

export default SelectOption;
