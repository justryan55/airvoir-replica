import styled from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 0% 0px 15%;
  background-color: transparent;
  /* position: absolute;
  top: 100vh;
  left: 0; */

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Logo = styled.h1`
  color: white;
`;

const MenuItem = styled.li`
  list-style-type: none;
  font-weight: 700;
`;

export default function NavBar() {
  return (
    <NavigationContainer>
      <div>
        <Logo>FlexiRent</Logo>
      </div>
      <ul>
        <MenuItem>About us</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Blog</MenuItem>
      </ul>
    </NavigationContainer>
  );
}
