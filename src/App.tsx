import styled from "styled-components";
import "./App.css";
import Home from "./views/Home";
import Benefits from "./views/Benefits";
import Steps from "./views/Steps";
import FAQ from "./views/FAQ";
import Slider from "./views/Slider";
import Testimonials from "./views/Testimonials";
import Footer from "./views/Footer";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Layout>
        <Slider />
        <Home />
        <Benefits />
        <Steps />
        <Testimonials />
        <FAQ />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
