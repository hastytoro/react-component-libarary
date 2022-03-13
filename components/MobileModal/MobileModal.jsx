import React from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';

const App = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Header>
        <h1>Jame Bond Homepage</h1>
        <NavList>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/">About</NavLink>
          </li>
        </NavList>
      </Header>
      <Main>
        <ContactButton onClick={() => setShowModal(true)}>
          Contact Us
        </ContactButton>
        <Modal
          title="Contact Us"
          isOpen={showModal}
          handleDismiss={() => setShowModal(false)}
        >
          <Form />
        </Modal>
      </Main>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
`;
const NavList = styled.ul`
  display: flex;
  gap: 8px;
  list-style-type: none;
`;

const NavLink = styled.a`
  color: hsl(265deg 90% 40%);
  text-decoration: none;
  font-size: 1rem;
  padding: 0px 16px;
  :hover {
    color: hsl(265deg 90% 40%);
    font-weight: bold;
  }
`;

const Main = styled.main`
  min-height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 16px 48px;
  margin: 32px;
  outline-offset: 8px;
`;

const Modal = ({ title, isOpen, handleDismiss, children }) => {
  if (!isOpen) return null;
  return (
    <Overlay>
      <Content>
        <Header>
          <h1>{title}</h1>
          <CloseButton onClick={handleDismiss}>
            <X />
          </CloseButton>
        </Header>
        <ContentWrapper>{children}</ContentWrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  width: 65%;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -48px;
  right: 0;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: white;
  @media (max-width: 600px) {
    top: 0px;
    color: black;
  }
`;

const ContentWrapper = styled.div`
  padding: 32px;
`;

const Form = () => (
  <form action="/" method="POST">
    <Field id="name" type="text" label="Name" placeholder="James Bond" />
    <Field id="email" type="email" label="Email" placeholder="jbond@mi6.gov" />
    <Field as="textarea" id="message" label="Message" placeholder="" />
    <Button>Submit</Button>
  </form>
);

function Field({ as, id, label, ...delegated }) {
  // textarea ought to be taller, since they're multi-line.
  // const inputHeight = as === 'textarea' ? 140 : undefined;
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={id}>{label}:</FieldLabel>
      <Input type="text" id={id} as={as} {...delegated} />
    </FieldWrapper>
  );
}

const FieldWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 4px 0px;
  font-size: 16px;
`;

const FieldLabel = styled.label`
  flex: 2;
  max-width: 80px;
`;

const Input = styled.input`
  flex: 4;
  padding: 4px;
  font-size: 1rem;
  height: var(--input-height);
  min-width: 80px;
  outline-offset: 4px;
  ::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.button`
  display: block;
  font-size: 16px;
  margin: 32px auto 0;
  padding: 8px 32px;
  outline-offset: 6px;
`;

export default App;
