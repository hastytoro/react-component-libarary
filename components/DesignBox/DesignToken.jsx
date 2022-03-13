import React from 'react';
import styled from 'styled-components/macro';

const App = () => <DesignToken />;

const ELEVATIONS = {
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `,
};

const DesignToken = () => (
  <>
    <Wrapper>
      <SubtleBox />
      <ElevatedBox />
    </Wrapper>

    <BlueWrapper>
      <SubtleBox />
      <ElevatedBox />
    </BlueWrapper>
  </>
);

const Wrapper = styled.div`
  --shadow-color: 0deg 0% 50%;
  background-color: hsl(0deg 0% 95%);
  display: flex;
  gap: 16px;
  padding: 32px;
  height: 50vh;
  /* centering content */
  justify-content: center;
  align-items: center;
`;
const BlueWrapper = styled(Wrapper)`
  --shadow-color: 220deg 60% 50%;
  background-color: hsl(220deg 100% 80%);
  padding: 32px;
`;

const Box = styled.div`
  border-radius: 8px;
  background: white;
`;
const SubtleBox = styled(Box)`
  width: 50px;
  height: 50px;
  box-shadow: ${ELEVATIONS.medium};
`;
const ElevatedBox = styled(Box)`
  width: 100px;
  height: 100px;
  box-shadow: ${ELEVATIONS.large};
`;

export default App;
