import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Section = styled.section`
  position: relative;
  inset: 0% 0% auto;
  min-height: 100vh;
  height: 100%;

  background-color: #ffffff;
`;

const Container = styled.div`
  width: 100%;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Padding = styled.div`
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

const Grid = styled.div`
  grid-column-gap: 5rem;
  grid-row-gap: 4rem;
  grid-template-rows: auto;
  grid-template-columns: max-content 1fr;
  grid-auto-columns: 1fr;
  align-items: start;
  display: grid;
  position: relative;
`;

const LeftContent = styled.div`
  align-items: flex-start;
  height: 14rem;
  display: flex;
  position: sticky;
  top: 20%;
  overflow: hidden;
`;

const Zero = styled.div`
  font-size: 14rem;
  font-weight: 700;
  line-height: 1;
`;

const Counter = styled.div`
  will-change: transform;
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg);
  transform-style: preserve-3d;
`;

const Number = styled.div`
  font-size: 14rem;
  font-weight: 700;
  line-height: 1;
`;

const RightContent = styled.div`
  grid-column-gap: 7rem;
  grid-row-gap: 7rem;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  display: grid;
`;

const RightSubContent = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const SemiboldText = styled.p`
  font-weight: 600;
`;

const SpacerSmall = styled.div`
  width: 100%;
  padding-top: 1rem;
`;

const Header = styled.h2`
  letter-spacing: -3.2px;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;
`;

const SpacerBig = styled.div`
  width: 100%;
  padding-top: 6rem;
`;

const ButtonContainer = styled.div`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
`;

const Button = styled.a`
  border: 1px solid var(--border-color--border-primary);
  background-color: var(--background-color--background-alternate);
  color: var(--text-color--text-alternate);
  text-align: center;
  border-radius: 10rem;
  padding: 0.75rem 1.5rem;
  margin-top: 10px;
  text-decoration: none;
  transition: box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export default function Steps() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (counterRef.current) {
      const numbers = counterRef.current.children;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top ",
            scrub: true,
            // markers: true,
          },
        })
        .to(numbers[0], { y: "-100%", duration: 1 })
        .to(numbers[1], { y: "-100%", duration: 1 })
        .to(numbers[2], { y: "-100%", duration: 1 });
    }
  }, []);
  return (
    <Section>
      <Container>
        <Padding>
          <Grid ref={containerRef}>
            <LeftContent>
              <Zero>0</Zero>
              <Counter ref={counterRef}>
                <Number>1</Number>
                <Number>2</Number>
                <Number>3</Number>
              </Counter>
            </LeftContent>
            <RightContent>
              <RightSubContent>
                <SemiboldText>Step 1</SemiboldText>
                <SpacerSmall />
                <Header>Choose your car & confirm your booking.</Header>
                <SpacerSmall />
                <Text>
                  Select your desired car model, pick-up location, and rental
                  dates from our extensive range of vehicles. Submit your
                  booking request, and our team will confirm availability and
                  provide you with the best options based on your preferences.
                </Text>
                <ButtonContainer>
                  <Button>Book today</Button>
                </ButtonContainer>
              </RightSubContent>
              <RightSubContent>
                <SemiboldText>Step 2</SemiboldText>
                <SpacerSmall />
                <Header>Review your options and select the best fit.</Header>
                <SpacerSmall />
                <Text>
                  After reviewing the available cars, confirm the option that
                  best fits your needs. Our team will send you the rental
                  agreement and an invoice to finalize your booking and secure
                  the vehicle for your dates.
                </Text>
              </RightSubContent>
              <RightSubContent>
                <SemiboldText>Step 3</SemiboldText>
                <SpacerSmall />
                <Header>Pick-up and enjoy your ride!</Header>
                <SpacerSmall />
                <Text>
                  Once your booking is confirmed, you can pick up your car at
                  the designated location. Our team will ensure the car is ready
                  and fully equipped, so you can enjoy a smooth and hassle-free
                  driving experience.
                </Text>
              </RightSubContent>
            </RightContent>
          </Grid>
          <SpacerBig />
        </Padding>
      </Container>
    </Section>
  );
}
