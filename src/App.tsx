import styled from "styled-components";
import { useRef } from "react";
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
`;

function App() {
  const processRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const FAQsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === "process") {
      processRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "benefits") {
      benefitsRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "FAQs") {
      FAQsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <NavBar onScrollTo={scrollToSection} />

      <Home />

      <div ref={benefitsRef} id="benefits">
        <Benefits />
      </div>

      <Slider />

      <div ref={processRef} id="process">
        <Steps />
      </div>
      <About />
      <Testimonials />
      <div ref={FAQsRef} id="FAQs">
        <FAQ />
      </div>

      <CTA />
      <Footer />
    </Layout>
  );
}

export default App;
