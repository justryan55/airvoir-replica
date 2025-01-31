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
  const planeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 300;
      const scrollPosition =
        ((window.scrollY - offset) / window.innerHeight) * 200;
      setScrollY(scrollPosition);
      console.log(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (secondTextRef.current) {
      gsap.set(secondTextRef.current, { opacity: 0 });
    }

    gsap.fromTo(
      planeRef.current,
      {
        translateX: -1500,
      },
      {
        translateX: 3000,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=400",
          // pin: containerRef.current,
          scrub: 2,
          onUpdate: (self) => {
            const progress = self.progress;

            if (firstTextRef.current) {
              gsap.to(firstTextRef.current, {
                opacity: 1 - progress * 3,
              });
            }

            if (secondTextRef.current) {
              gsap.to(secondTextRef.current, {
                opacity: progress * 2,
              });
            }
          },
        },
      }
    );
  }, []);

  return (
    <Layout>
      <ImageContainer>
        <Image src="images/car-top-view.png" ref={planeRef} />
      </ImageContainer>
      <Container ref={containerRef}>
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

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.fromTo(
//     containerRef.current,
//     { opacity: 1 },
//     {
//       opacity: 0,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power1.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: false,
//         pinSpacing: true,
//         start: "bottom 10%",
//         scrub: 1,
//         markers: true,
//       },
//     }
//   );

//   gsap.fromTo(
//     firstTextRef.current,
//     { opacity: 1 },
//     {
//       opacity: 0,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power1.out",
//       scrollTrigger: {
//         trigger: firstTextRef.current,
//         pin: false,
//         pinSpacing: true,
//         start: "top 40%",
//         end: "bottom 80%",
//         scrub: 1,
//       },
//     }
//   );

//   gsap.fromTo(
//     secondTextRef.current,
//     { opacity: 0 },
//     {
//       opacity: 1,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power1.out",
//       scrollTrigger: {
//         trigger: secondTextRef.current,
//         pin: false,
//         pinSpacing: true,
//         start: "top 30%",
//         end: "bottom 80%",
//         scrub: 1,
//       },
//     }
//   );
// }, []);

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: containerRef.current,
//       start: "top center",
//       end: "bottom top",
//       // pin: true,
//       // pinSpacing: true,
//       scrub: 1,
//       markers: true,
//     },
//   });

//   tl.fromTo(
//     firstTextRef.current,
//     { opacity: 1 },
//     {
//       opacity: 0,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power1.out",
//     }
//   );

//   tl.fromTo(
//     secondTextRef.current,
//     { opacity: 0 },
//     {
//       opacity: 1,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power1.out",
//     },
//     "<"
//   );

//   const animation = gsap.fromTo(
//     planeRef.current,
//     { translateX: -1500 },
//     {
//       translateX: 3000,
//       duration: 5,
//       stagger: 0.15,
//       ease: "power1.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         // pin: true,
//         // pinSpacing: true,
//         start: "top center",
//         end: "bottom top",
//         scrub: true,
//         // markers: true,
//       },
//     }
//   );

//   tl.to({}, { duration: 2 });
// }, []);
