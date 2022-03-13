import React, { useState } from 'react';
import styled from 'styled-components/macro';

const App = () => <AnimatedBox />;

// Important: When we remove the animation property, all of the CSS in the from and to blocks evaporates immediately. The element will revert back to default CSS.
// This is known as an 'interruption' and @keyframes animations don't handle interruptions well.
// There is a tool that can help in certain situations though: play states.

// Remember that styles are camelCased when setting them in JSX attributes like animationPlayState sets the discussed CSS property animation-play-state.
// Before we dynamically apply and remove the animation altogether. This time the property is always applied inside the Box styled component, but we dynamically toggle it between running and paused state.
// The paused works like the pause button on a remote control, everything freezes in place. Toggling it back to running will pick up from where it left off.
// animation-play-state has excellent browser support, going all the way back to IE10. Its not common to see animations require a "pause" functionality, but it's a neat property to have!

const AnimatedBox = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <Wrapper>
      <Box
        style={{
          animationPlayState: animate ? 'running' : 'paused',
        }}
      />
      <Button onClick={() => setAnimate(!animate)}>
        {animate ? 'Pause' : 'Start'}
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

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(105, 90, 205, 0.5);
  border: 2px solid slateblue;
  color: slateblue;
  /* animation */
  /* @keyframes jump {
    0% {
      transform: translateY(0%);
    }
    30% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(0%);
    }
  } */
  animation: jump 2s infinite;
`;

/*
  Animations vs transitions
  You might be wondering: when should we use @keyframes, and when should we use transition?
  Firstly there are some things that only @keyframes can do:
  -	Looped animations
  -	Multi-step animations
  -	pauseable animations
  We could do some of this stuff from JS. But usually, it's simpler to use @keyframes.
  If an animation needs to run immediately when the page loads or the component mounts, it's easiest to use @keyframes and the adjust animation property.
*/

const Button = styled.button`
  background: black;
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid transparent;
  color: white;
`;

export default AnimatedBox;
