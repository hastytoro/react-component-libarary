import React from 'react';
import styled from 'styled-components';

const App = () => <ProgressBar value="150" size="large" />;

const STYLES = {
  small: {
    height: '8',
    padding: 0,
  },
  medium: {
    height: '12',
    padding: 0,
  },
  large: {
    height: '16',
    padding: 4,
  },
};

const COLORS = {
  primary: 'hsl(240deg 80% 60%)',
  gray50: 'hsl(0deg 0% 95%)',
  gray300: 'hsl(0deg 0% 75%)',
  gray500: 'hsl(0deg 0% 50%)',
  gray700: 'hsl(0deg 0% 40%)',
  black: 'hsl(0deg 0% 0%)',
  transparent_gray15: 'hsl(0deg 0% 50% / 0.15)',
  transparent_gray35: 'hsl(0deg 0% 50% / 0.35)',
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ '--padding': styles.padding + 'px' }}
    >
      <Trimmer>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </Trimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparent_gray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparent_gray35};
  padding: var(--padding);
  border-radius: 4px;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px;
`;

const Trimmer = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

export default ProgressBar;
