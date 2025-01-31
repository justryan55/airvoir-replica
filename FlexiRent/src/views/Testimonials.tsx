import styled from "styled-components";
import Testimonial from "../components/Testimonial";

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
`;

const Header = styled.h1`
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 0;
`;

const SpacerSmall = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const Text = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const ButtonGroup = styled.div`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
`;

const Button = styled.a`
  padding: 0.5rem 1.25rem;
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
`;

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <Padding>
          <Grid>
            <LeftContent>
              <div>
                <Header>FlexiRent Customers</Header>
                <SpacerSmall />
                <Text>Read what our clients have to say about us.</Text>
                <ButtonGroup>
                  <Button>Book today</Button>
                </ButtonGroup>
              </div>
            </LeftContent>
            <RightContent>
              <LeftList>
                <Testimonial
                  text="Outstanding service! The FlexiRent team went above and beyond, making the car rental process smooth and flexible even with my last-minute request. The car was pristine, comfortable, and the entire experience was seamless. I truly appreciated the professionalism and efficiency from start to finish. It saved me so much time and hassle, and I’ll definitely be using FlexiRent again!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167987cd9b7f450ddb1a_Testimonial%204.webp"
                  name="Rachel Adams"
                  location="Founder, Bright Future Solutions"
                />
                <Testimonial
                  text="FlexiRent made my business trip stress-free and enjoyable. The service was exceptional, with personalized attention and a luxury car that made my travel experience unforgettable. I highly recommend them!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167acde6be3c583c89e0_Testimonial%201.webp"
                  name="Ethan Morgan"
                  location="CEO, InnovateTech"
                />
                <Testimonial
                  text="I had a fantastic experience with FlexiRent! The service was top-notch, and the car was both luxurious and reliable. They made my trip comfortable and smooth. I’ll definitely rent from them again."
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167acde6be3c583c89e0_Testimonial%201.webp"
                  name="Dr. Olivia Miles"
                  location="Founder, Wellness Clinic"
                />
              </LeftList>
              <RightList>
                <Testimonial
                  text="FlexiRent provided an excellent experience. The customer service was responsive and accommodated my schedule perfectly. The car was just what I needed, and the whole process was smooth. I highly recommend their service!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167968f40127d58ea339_Testimonial%205.webp"
                  name="Liam Foster"
                  location="Professional Athlete"
                />
                <Testimonial
                  text="The car was perfect, and the service was seamless. All the staff were courteous and efficient, making for an excellent experience. Thank you for making my trip effortless and enjoyable!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167acde6be3c583c89a5_Testimonial%202.webp"
                  name="Sophia Green"
                  location="Operations Manager, TechLink"
                />
                <Testimonial
                  text="Even with my last-minute booking, FlexiRent handled everything with exceptional service and attention to detail. Their dedication to customer satisfaction made all the difference. Highly recommended!"
                  image="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6643167b42dcd47f12c7704a_Testimonial%203.webp"
                  name="Lucas Fischer"
                  location="Head of Development, Swiss Enterprises"
                />
              </RightList>
            </RightContent>
          </Grid>
        </Padding>
      </Container>
    </Section>
  );
}
