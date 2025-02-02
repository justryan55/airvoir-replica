import styled from "styled-components";
import "./App.css";
import Home from "./views/Home";
import Benefits from "./views/Benefits";
import Steps from "./views/Steps";
import FAQ from "./views/FAQ";
import Slider from "./views/Slider";
import Testimonials from "./views/Testimonials";
import Footer from "./views/Footer";
import NavBar from "./components/NavBar";
import About from "./views/About";
import CTA from "./views/CTA";

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 979px) {
    max-width: 100vw;
  }
`;

function App() {
  return (
    <>
      <Layout>
        <NavBar />
        <Home />
        <Benefits />
        <Slider />
        <Steps />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
