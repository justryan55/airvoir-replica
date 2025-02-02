import styled from "styled-components";
import Hamburger from "hamburger-react";
import { useState } from "react";

const NavContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: relative;
  z-index: -1000;
  background-color: white;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 4.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 980px) {
    display: flex;
    position: absolute;
    z-index: 1;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
  }
`;

const Content = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 979px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  @media screen and (max-width: 979px) {
    display: none;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 979px) {
    flex-direction: column;
  }
`;

const Link = styled.li`
  list-style-type: none;
  color: var(--link-color--link-primary);
  padding: 0.5rem 1rem;
  font-weight: 500;

  @media screen and (max-width: 979px) {
    padding: 1rem;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 979px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
  }
`;

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </HamburgerMenu>

      <NavContainer isOpen={isOpen}>
        <Content>
          <LogoContainer>
            <img src="/images/logo.svg" alt="Airvoir logo" />
          </LogoContainer>
          <LinkContainer>
            <Link onClick={() => setOpen(false)}>About us</Link>
            <Link onClick={() => setOpen(false)}>Contact</Link>
            <Link onClick={() => setOpen(false)}>Blog</Link>
          </LinkContainer>
        </Content>
      </NavContainer>
    </>
  );
}
