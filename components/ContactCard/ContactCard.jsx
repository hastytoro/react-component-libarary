import React from 'react';
import styled from 'styled-components';

const App = () => (
  <ContactCard name={'Mr Whiskerson'} email={'meow@gmail.com'} />
);

const ContactCard = ({ name, email }) => (
  <Wrapper>
    <Avatar alt="" src={require('./images.jpg')} />
    <Name>{name}</Name>
    <Email>{email}</Email>
  </Wrapper>
);

const Wrapper = styled.article`
  /* Just centering styles */
  margin-top: 25%;
  margin-left: auto;
  margin-right: auto;

  max-width: 250px;
  border-radius: 24px;
  padding: 24px;
  background: white;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
`;

const Avatar = styled.img`
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  /* Overflow image passed Wrapper boundary */
  margin-top: -64px;
  margin-bottom: 16px;
  border: 6px solid white;
`;

const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0px;
`;

const Email = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: hsl(0deg 0% 40%);
`;

export default ContactCard;
