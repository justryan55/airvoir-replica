import styled from "styled-components";
import Testimonial from "../components/Testimonial";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
  position: relative;
  inset: 0% 0% auto;
  min-height: 100vh;
  height: 100%;
  background-color: #ffffff;
`;

const Container = styled.div`
  width: 100%;
  max-width: 80rem;

  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Padding = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 5%;
  padding-right: 5%;
`;

const Grid = styled.div`
  grid-column-gap: 0rem;
  grid-row-gap: 0rem;
  border: 1px solid var(--border-color--border-secondary);
  background-color: var(--background-color--background-secondary);
  border-radius: 1rem;
  grid-template-rows: auto;
  grid-template-columns: 0.75fr 1fr;
  grid-auto-columns: 1fr;
  align-items: stretch;
  height: 75vh;
  display: grid;

  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContent = styled.div`
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  display: flex;
`;

const RightContent = styled.div`
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  align-content: center;
  align-items: center;
  padding-right: 5rem;
  display: grid;
  overflow: hidden;
  gap: 5rem;

  @media screen and (max-width: 979px) {
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
`;

const Header = styled.h1`
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 0;

  @media screen and (max-width: 979px) {
    font-size: 2.5rem;
  }
`;

const SpacerSmall = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  margin-bottom: 0;
  margin-top: 0;

  @media screen and (max-width: 979px) {
    padding-top: 1.25rem;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0;
  margin-top: 0;

  @media screen and (max-width: 979px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  display: flex;

  @media screen and (max-width: 979px) {
    padding-top: 1.25rem;
  }
`;

const Button = styled.a`
  color: var(--base-color-neutral--black);
  background-color: #0000;
  transition: background-color 0.4s;
  border: 1px solid var(--border-color--border-primary);
  text-align: center;
  border-radius: 10rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 979px) {
    font-size: 0.8rem;
  }
`;

const LeftList = styled.div`
  grid-row-gap: 1rem;
  column-count: 2;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  align-self: center;
  column-gap: 1.5rem;
  width: 100%;
  height: 100%;
  display: grid;

  @media screen and (max-width: 979px) {
    display: none;
  }
`;

const RightList = styled.div`
  grid-column-gap: 1rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  width: 100%;
  /* height: 100%; */
  display: grid;
  gap: 20px;

  @media screen and (max-width: 979px) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function Testimonials() {
  const leftListRef = useRef<HTMLDivElement>(null);
  const rightListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 768) {
      if (leftListRef.current) {
        gsap.fromTo(
          leftListRef.current,
          { y: 0 },
          {
            y: -200,
            duration: 5,
            scrollTrigger: {
              scrub: true,
              // markers: true,
              start: "center center",
              end: "bottom top",
            },
          }
        );
      }

      if (rightListRef.current) {
        gsap.fromTo(
          rightListRef.current,
          { y: 0 },
          {
            y: 200,
            duration: 5,
            scrollTrigger: {
              scrub: true,
              // markers: true,
              start: "center center",
              end: "bottom top",
            },
          }
        );
      }
    }
  }, []);
  return (
    <Section>
      <Container>
        <Padding>
          <Grid>
            <LeftContent>
              <div>
                <Header>Airvoir Customers</Header>
                <SpacerSmall />
                <Text>Read what our clients have to say about us.</Text>
                <ButtonGroup>
                  <Button>Follow us on LinkedIn</Button>
                </ButtonGroup>
              </div>
            </LeftContent>
            <RightContent>
              <LeftList ref={leftListRef}>
                <Testimonial
                  text="Excellent services! The Airvoir team were very kind, the flight advisor being flexible and prompt even if my schedule is quite busy, which I have surprised The flight was fast, comfortable, stress free and I appreciate the professionalism and efficiency of all personnel. All in all, a wonderful, life saving experience a lot of time and energy. I highly recommend them and will definitely be back!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167987cd9b7f450ddb1a_Testimonial%204.webp"
                  name="Simona Mirea"
                  location="Founder Hearth Agency"
                />
                <Testimonial
                  text="Airvoir turned my business trip into a seamless and luxurious experience. Impeccable service, personalized attention, and truly a world-class flight. Highly recommend!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167acde6be3c583c89e0_Testimonial%201.webp"
                  name="Paul Burca"
                  location="Founder, Assista.us"
                />
                <Testimonial
                  text="Great experience with Airvoir! Excellent service and luxurious travel experience. Thanks for making my trip exceptionally pleasant and smooth exceptionally smooth."
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167acde6be3c583c89e0_Testimonial%201.webp"
                  name="Dr. Salim Azar"
                  location="Dr Azar Clinic"
                />
              </LeftList>
              <RightList ref={rightListRef}>
                <Testimonial
                  text="“My experience with Airvoir was excellent. The charter advisor was very attentive and flexible to my schedule. The trip went smoothly and without stress. I can use Airvoir for private jet charter only recommend!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167968f40127d58ea339_Testimonial%205.webp"
                  name="Marius Copil"
                  location="Professional Tennis Player"
                />
                <Testimonial
                  text="The flight and service went very smoothly, all the staff were very pleasant and professional. Thank you for an amazing vacation!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167acde6be3c583c89a5_Testimonial%202.webp"
                  name="Leila Lina"
                  location="Manager, Avallonis LLC"
                />
                <Testimonial
                  text="“My experience with Airvoir has been exceptional. Despite having contacted them at the last minute, they have fulfilled all my requests. Attention to detail what they have is exactly what you would like to have, au revoir!”"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167b42dcd47f12c7704a_Testimonial%203.webp"
                  name="Xavier Werren"
                  location="Head Coordinator, Swiss Academics"
                />
              </RightList>
            </RightContent>
          </Grid>
        </Padding>
      </Container>
    </Section>
  );
}
