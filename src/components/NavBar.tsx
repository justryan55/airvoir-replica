import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;

  position: absolute;
  z-index: 1;
  background-color: #fff0;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 4.5rem;

  @media screen and (max-width: 979px) {
    display: none;
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
`;

const LogoContainer = styled.div``;

const LinkContainer = styled.ul`
  display: flex;
`;

const Link = styled.li`
  list-style-type: none;
  color: var(--link-color--link-primary);
  padding: 0.5rem 1rem;
  font-weight: 500;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <Content>
        <LogoContainer>
          <img src="/images/logo.svg" alt="Airvoir logo" />
        </LogoContainer>
        <LinkContainer>
          <Link>About us</Link>
          <Link>Contact</Link>
          <Link>Blog</Link>
        </LinkContainer>
      </Content>
    </NavContainer>
  );
}
