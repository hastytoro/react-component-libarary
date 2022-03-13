import React from 'react';
import styled from 'styled-components/macro';

const App = () => <Hero />;

const Hero = () => {
  return (
    <Wrapper>
      <Image src="/images/hero-img.jpg" />{' '}
      {/* ensure images folder is public */}
      <Swoop src="/swoop.svg" /> {/* ensure svg is also in public folder */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60%;
  min-height: 400px;
  /* centering content */
  display: grid;
  place-content: center;
  background: hsl(0deg 0% 1%);
`;

const Image = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  /* max-height: 100%; */
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    We need to overlay by a couple px to prevent any pixel-rounding
    display issues so change bottom from 0px to -2px.
  */
  bottom: 0px;
  width: 100%;
`;

export default Hero;
