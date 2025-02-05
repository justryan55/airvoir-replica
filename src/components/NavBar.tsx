import styled from "styled-components";
import Hamburger from "hamburger-react";
import { useState } from "react";

interface NavContainerProps {
  isOpen: boolean;
}

interface NavBarProps {
  onScrollTo: (section: string) => void;
}

const NavContainer = styled.div<NavContainerProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: relative;
  background-color: white;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 4.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding-left: 10px;

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
  cursor: pointer;
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

const NavButton = styled.button`
  border: none;
  background: none;
  color: var(--link-color--link-primary);
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

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

export default function NavBar({ onScrollTo }: NavBarProps) {
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
            <NavButton onClick={() => onScrollTo("benefits")}>
              Benefits
            </NavButton>

            <NavButton onClick={() => onScrollTo("process")}>Process</NavButton>
            <NavButton onClick={() => onScrollTo("FAQs")}>FAQs</NavButton>
          </LinkContainer>
        </Content>
      </NavContainer>
    </>
  );
}
