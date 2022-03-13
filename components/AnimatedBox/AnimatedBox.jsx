import React, { useState } from 'react';
import styled from 'styled-components/macro';

const App = () => <AnimatedBox />;

const AnimatedBox = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <Wrapper>
      <Box
        style={{
          animation: animate ? 'jump 2s infinite ease-in' : undefined,
        }}
      />
      <Button onClick={() => setAnimate(!animate)}>
        {animate ? 'Disable' : 'Enable'}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100vh;
`;

// There's no rule that says that animations need to happen immediately!
// It's more accurate to say that the animation will start as soon as a valid animation property is wired up. And we can add that property dynamically, at any point in time.

// When the page renders the animation property for the Box component is set to undefined, and so nothing happens. Selecting the "Enable animation" <button>, updates the property via conditional rendering.
// The moment the animation property is set to a valid value -- animation begins. If we change the state to using the useState hook the animation is set to undefined and disabled.
// Warning: Looking at the above example, when we disable the animation it can lead to jarring transitions.

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(105, 90, 205, 0.5);
  border: 2px solid slateblue;
  color: slateblue;
  /* animation */
  @keyframes jump {
    0% {
      transform: translateY(0%);
    }
    30% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(0%);
    }
  }
`;

const Button = styled.button`
  background: black;
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid transparent;
  color: white;
`;

export default AnimatedBox;
