import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const Layout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const TextContainer = styled.div`
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TextSmall = styled.h3`
  letter-spacing: -0.92px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

const TextMedium = styled.h2`
  letter-spacing: -2px;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
`;

const TextLarge = styled.h1`
  letter-spacing: -3.2px;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
  padding: 0;
`;

const FirstTextContainer = styled.div`
  position: absolute;
`;

const SecondTextContainer = styled.div`
  position: absolute;
  width: 70%;
`;

const ImageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  max-width: 100vw;
`;

const Image = styled.img`
  position: relative;
  z-index: 1000;
  height: 90%;
`;

export default function Slider() {
  const [scrollY, setScrollY] = useState(-90);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const containerRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 300;
      const scrollPosition =
        ((window.scrollY - offset) / window.innerHeight) * 200;
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.fromTo(carRef.current, { x: -1500 }, { x: 1500, duration: 3 });
    tl.fromTo(
      firstTextRef.current,
      { opacity: 1 },
      { opacity: 0, delay: -2.5 }
    );
    tl.fromTo(
      secondTextRef.current,
      { opacity: 0 },
      { opacity: 1, delay: -1.5, duration: 2 }
    );

    ScrollTrigger.create({
      animation: tl,
      trigger: containerRef.current,
      scrub: true,
      pin: true,
      pinSpacing: true,
    });
  }, []);

  return (
    <Layout ref={containerRef}>
      <ImageContainer>
        <Image src="images/car-top-view.png" ref={carRef} />
      </ImageContainer>
      <Container>
        <FirstTextContainer>
          <TextContainer ref={firstTextRef}>
            <TextSmall>Welcome to FlexiRent</TextSmall>
            <TextLarge>
              Where every trip is turned into a lasting memory
            </TextLarge>
          </TextContainer>
        </FirstTextContainer>
        <SecondTextContainer>
          <TextContainer ref={secondTextRef}>
            <TextMedium>
              Discover car rental reimagined. Enjoy personalized service at
              every turn
            </TextMedium>
          </TextContainer>
        </SecondTextContainer>
      </Container>
    </Layout>
  );
}
