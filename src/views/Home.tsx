import styled from "styled-components";
import { Button } from "@mui/material";

const Section = styled.section`
  position: relative;
  inset: 0% 0% auto;
  height: 100vh;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  inset: 0%;

  @media screen and (max-width: 979px) {
    display: none;
  }
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  object-position: 50% 100%;
  width: 100%;
  height: 100%;
`;

const BackgroundGradient = styled.div`
  background-image: linear-gradient(#f4f4f500, #f4f4f5);
  height: 10rem;
  position: absolute;
  inset: auto 0% 0%;
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const VideoContainer = styled.div`
  position: absolute;
  inset: 0% 0% auto auto;
  height: 30rem;

  @media screen and (max-width: 979px) {
    display: none;
  }
`;

const Video = styled.video`
  vertical-align: baseline;
  display: inline-block;
  height: 30rem;
`;

const ContentContainer = styled.div`
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 100%;
  display: flex;
  height: 100vh;

  @media screen and (max-width: 979px) {
    justify-content: flex-end;
    grid-row-gap: 0;
    height: 100%;
  }
`;

const HeaderContainer = styled.div`
  width: 26rem;
  position: relative;

  @media screen and (max-width: 979px) {
    width: 100%;
  }
`;

const Header = styled.h1`
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 5px;
  padding-bottom: 0;

  @media screen and (max-width: 979px) {
    font-size: 2.5rem;
    letter-spacing: -2px;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0;
  /* margin-top: 0; */

  @media screen and (max-width: 979px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const FormContainer = styled.div`
  box-sizing: border-box;
  border-radius: 1rem;
  width: 100%;
  padding: 1.5rem;

  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;

  @media screen and (max-width: 979px) {
    justify-content: center;
    align-items: center;
  }
`;

const HeroForm = styled.div`
  box-sizing: border-box;
  background-color: var(--background-color--background-primary);
  border-radius: 1rem;
  width: 100%;
  padding: 1.5rem;
`;

const Form = styled.form`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;

  @media screen and (max-width: 979px) {
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-flow: row;
  display: flex;

  @media screen and (max-width: 979px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Separator = styled.div`
  min-width: 23rem;
  display: flex;

  @media screen and (max-width: 979px) {
    flex-direction: column;
    min-width: 0;
  }
`;

const FormFieldWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-right: 1.7rem;

  @media screen and (max-width: 979px) {
    margin: 0;
  }
`;

const IsPassengers = styled.div``;

const Label = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  display: flex;

  @media screen and (max-width: 979px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  border: 1px solid var(--border-color--border-secondary);
  background-color: var(--background-color--background-secondary);
  color: var(--text-color--text-primary);
  border-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  width: 100%;
  height: auto;
  min-height: 2.75rem;
  margin-bottom: 0;
  padding: 0rem 0.75rem 0px 0.4rem;
  font-size: 1rem;
  line-height: 1.6;
  transition: box-shadow 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    border-color 0.2s;

  &:hover {
    border-color: var(--base-color-neutral--neutral-light);
  }

  @media screen and (max-width: 979px) {
    width: 80vw;
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #000000;
    color: #ffffff;
    padding: 0rem 0.75rem;
    min-height: 2.75rem;
    margin-top: 10px;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;

    &:hover {
      background-color: #333333;
    }

    &:active {
      background-color: #1a1a1a;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 979px) {
      width: 90vw;
    }
  }
`;

const WhatsAppImage = styled.img`
  position: fixed;
  inset: auto 1% 2% auto;

  @media screen and (max-width: 979px) {
    display: none;
  }
`;

export default function Home() {
  return (
    <Section>
      <BackgroundContainer>
        <BackgroundImage src="images/hero-sky.webp" />
        <BackgroundGradient />
      </BackgroundContainer>
      <HeroContainer>
        <VideoContainer>
          <Video
            src="videos/airvoir-hero.webm"
            autoPlay
            loop
            muted
            playsInline
          />
        </VideoContainer>
        <ContentContainer>
          <HeaderContainer>
            <Header>The world is yours.</Header>
            <Text>
              Experience the ultimate in personalized corporate jet charters.
            </Text>
          </HeaderContainer>
          <FormContainer>
            <HeroForm>
              <Form>
                <Container>
                  <Separator>
                    <FormFieldWrapper>
                      <Label>Departure</Label>
                      <Input
                        type="text"
                        name="departure_airport"
                        id="autocomplete-input"
                        placeholder="Departure Airport"
                      />
                    </FormFieldWrapper>
                    <FormFieldWrapper>
                      <Label>Arrival</Label>
                      <Input
                        type="text"
                        name="arrival_airport"
                        id="autocomplete-input-2"
                        placeholder="Arrival Airport"
                      />
                    </FormFieldWrapper>
                  </Separator>
                  <Separator>
                    <FormFieldWrapper>
                      <Label>Departure Date</Label>
                      <Input
                        type="text"
                        name="departure_date"
                        id="departure_date"
                        data-toggle="datepicker"
                        autoComplete="off"
                        placeholder="dd/mm/yyyy"
                      />
                    </FormFieldWrapper>
                    <FormFieldWrapper>
                      <Label>Return Date</Label>
                      <Input
                        type="text"
                        name="return_date"
                        id="return_date"
                        data-toggle="datepicker"
                        autoComplete="off"
                        placeholder="dd/mm/yyyy"
                      />
                    </FormFieldWrapper>
                  </Separator>
                  <FormFieldWrapper>
                    <IsPassengers>
                      <Label>Passengers</Label>
                      <Input
                        type="number"
                        name="passagers"
                        id="passagers"
                        placeholder="0"
                      />
                    </IsPassengers>
                  </FormFieldWrapper>
                  <FormFieldWrapper>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </FormFieldWrapper>
                  <FormFieldWrapper>
                    <Label>Mobile</Label>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Mobile"
                    />
                  </FormFieldWrapper>
                </Container>
                <ButtonContainer>
                  <StyledButton variant="contained">
                    Request options
                  </StyledButton>
                </ButtonContainer>
              </Form>
            </HeroForm>
          </FormContainer>
          <WhatsAppImage
            src="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/66a79c51a6b0b117a90789e1_whatsapp-svgrepo-com.svg"
            loading="lazy"
            width="37"
            alt=""
          />
        </ContentContainer>
      </HeroContainer>
    </Section>
  );
}
