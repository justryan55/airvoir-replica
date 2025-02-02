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

  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContent = styled.div`
  align-items: flex-start;
  height: 14rem;
  display: flex;
  position: sticky;
  top: 20%;
  overflow: hidden;

  @media screen and (max-width: 979px) {
    display: none;
  }
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

  @media screen and (max-width: 979px) {
    grid-row-gap: 50px;
  }
`;

const RightSubContent = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const SemiboldText = styled.p`
  font-weight: 600;

  @media screen and (max-width: 979px) {
    font-size: 2rem;
    margin: 0px 0px 0px 10px;
  }
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

  @media screen and (max-width: 979px) {
    letter-spacing: -1.5px;
    font-size: 2rem;
    margin: 0px 10px 0px 10px;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;

  @media screen and (max-width: 979px) {
    font-size: 1rem;
    padding: 0px 10px 0px 10px;
  }
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

  @media screen and (max-width: 979px) {
    margin: 0px 0px 0px 10px;
  }
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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top ",
            scrub: 1.25,
            // markers: true,
          },
        })
        .to(counterRef.current, { y: "-500px", duration: 3 });
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
                <Header>Configure your flight & expect a follow-up.</Header>
                <SpacerSmall />
                <Text>
                  Select your desired destination and departure dates from our
                  extensive list of available airports and submit your options
                  request. Our industry experts will scan the market and it’s
                  current dynamics and negotiate the best options.
                </Text>
                <ButtonContainer>
                  <Button>Book today</Button>
                </ButtonContainer>
              </RightSubContent>
              <RightSubContent>
                <SemiboldText>Step 2</SemiboldText>
                <SpacerSmall />
                <Header>Choose the best option for your needs.</Header>
                <SpacerSmall />
                <Text>
                  Upon receiving an exhaustive list of the best negotiated jet
                  charter options, you may confirm your desired option with our
                  dedicated advisor to receive the jet charter contract and
                  customer invoice to lock-in your flight.
                </Text>
              </RightSubContent>
              <RightSubContent>
                <SemiboldText>Step 3</SemiboldText>
                <SpacerSmall />
                <Header>Flight Confirmation.</Header>
                <SpacerSmall />
                <Text>
                  Upon signing the jet charter contract and clearing the charter
                  invoice, we prepare the desired aircraft for your itinerary
                  and make all necessary arrangements to have crew and catering
                  ready to suite your schedule.
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
