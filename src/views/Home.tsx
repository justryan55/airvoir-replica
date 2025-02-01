import styled from "styled-components";
import Experience from "../components/Experience";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

const Layout = styled.div`
  background: linear-gradient(135deg, #343541, #dcdcdc);
  height: 100vh;
`;

const Container = styled.div`
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 30px;
  text-align: start;
`;

const SubHeader = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  padding-left: 10px;
  text-align: start;
`;

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <Container>
        <div
          style={{
            gridColumn: "1/3",
            paddingLeft: "20rem",
            paddingBottom: "10rem",
          }}
        >
          <Header>The road is yours.</Header>
          <SubHeader>
            Indulge in the finest, personalized car rental experience.
          </SubHeader>
        </div>
        <Experience />
      </Container>
      <Form />
    </Layout>
  );
}
