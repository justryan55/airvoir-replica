import styled from "styled-components";
import Faq from "react-faq-component";
import { useEffect, useState } from "react";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 0px 15% 0px 15%;

  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
    padding: 0px 5% 50px 5%;
    height: 70vh;
  }
`;

const TextLarge = styled.h1`
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 0;
  margin-bottom: 20px;

  @media screen and (max-width: 979px) {
    letter-spacing: -2px;
    font-size: 2rem;
  }
`;

const TextSmall = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  padding-top: 0;
  margin-top: 0;

  @media screen and (max-width: 979px) {
    font-size: 0.8rem;
  }
`;

const data = {
  rows: [
    {
      title: "How far in advance do I need to book a private jet?",
      content: (
        <p>
          We offer flexible booking options to accommodate your schedule. While
          we recommend booking at least a week in advance for the best
          selection, we can often arrange flights with shorter notice. For
          urgent requests, please contact our team directly.
        </p>
      ),
    },
    {
      title:
        "What amenities and services are included in my private jet charter?",
      content: (
        <p>
          Our private jet charters come with a range of amenities, including
          personalized catering, in-flight entertainment, and luxury seating. We
          also provide ground transportation, concierge services, and additional
          customization to meet your specific needs.
        </p>
      ),
    },
    {
      title: "Can I bring pets on board my chartered jet?",
      content: (
        <p>
          Yes, pets are welcome on our private jets. We understand that your
          pets are part of the family, and we can make special arrangements to
          ensure they travel comfortably and safely. Please inform us in advance
          if you plan to bring pets.
        </p>
      ),
    },
    {
      title:
        "How does Airvoir ensure privacy and discretion for its passengers?",
      content: (
        <p>
          Unlike owning a private aircraft, chartering offers a higher degree of
          privacy as tail numbers vary with every flight you book.
        </p>
      ),
    },
    {
      title:
        "Do you offer international flights, and what are the customs requirements?",
      content: (
        <p>
          We provide global private jet charters, flying to destinations
          worldwide. Our team will handle all customs and immigration
          requirements to ensure a smooth journey. Please have your passport and
          any necessary travel documents ready, and we'll take care of the rest.
        </p>
      ),
    },
  ],
};

export default function FAQ() {
  const [faqStyles, setFaqStyles] = useState({
    titleTextColor: "black",
    rowTitleColor: "black",
    rowTitleTextSize: "x-large",
  });

  useEffect(() => {
    const updateStyle = () => {
      setFaqStyles({
        titleTextColor: "black",
        rowTitleColor: "black",
        rowTitleTextSize: window.innerWidth <= 479 ? "large" : "x-large",
      });
    };

    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, []);

  return (
    <Layout>
      <div>
        <TextLarge>FAQs</TextLarge>
        <TextSmall>Here are answers to questions our clients ask.</TextSmall>
      </div>
      <div>
        <Faq data={data} styles={faqStyles} />
      </div>
    </Layout>
  );
}
