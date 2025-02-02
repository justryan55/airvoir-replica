import styled from "styled-components";
import { Button } from "@mui/material";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0% 0% auto;
  min-height: 70vh;
  height: 100%;

  background-image: url("images/hero-sky.webp");
  background-position: 50% 100%;
  background-size: cover;
  position: relative;
`;

const Gradient = styled.div`
  background-image: linear-gradient(#fff0, #fff);
  width: 100%;
  height: 5rem;
  position: absolute;
  inset: auto 0% 0%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 48rem;
`;

const TextMedium = styled.h2`
  font-size: 1.125rem;
  text-align: center;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 0;

  @media screen and (max-width: 979px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const TextLarge = styled.h1`
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  padding: 0px;
  margin: 0px;
  margin-top: 25px;

  @media screen and (max-width: 979px) {
    letter-spacing: -2px;
    font-size: 2.5rem;
  }
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
    margin-top: 25px;

    &:hover {
      background-color: #333333;
    }

    &:active {
      background-color: #1a1a1a;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);
    }
  }
`;

export default function CTA() {
  return (
    <Section>
      <Container>
        <TextMedium>
          Experience private jet charters like never before
        </TextMedium>
        <TextLarge>Sit back, we’ll coordinate the rest.</TextLarge>
        <StyledButton>Book your flight</StyledButton>
      </Container>
      <Gradient />
    </Section>
  );
}
