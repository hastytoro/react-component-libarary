import React from 'react';
import styled from 'styled-components';

const App = () => (
  <FramedArt
    alt="A hallway with rainbow-coloured lights"
    caption="Upsplash | @wladkiselev"
    width={250}
  />
);

const FramedArt = ({ src, alt, caption, width }) => {
  const aspectRatio = 3 / 2;
  const height = width * aspectRatio;
  return (
    <Wrapper>
      <Photo
        src={require('./norway.jpg')}
        alt={alt}
        style={{ width, height }}
      />
      <Caption>{caption}</Caption>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* additional content centering:  */
  margin-top: 56px; /* temp buffer */
  border-radius: 8px;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;

  position: relative;
  /* isolation: isolate; */
  padding: 8px;
  background: white;
  box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028),
    0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061),
    0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
`;

const Photo = styled.img`
  display: block;
  border-radius: 4px;
  /* object-fit: cover; */
`;

const Caption = styled.p`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 10%;
  text-align: center;
  padding: 8px;
  background: hsl(0deg 0% 100% / 0.5);
  backdrop-filter: blur(4px);
`;

export default FramedArt;
