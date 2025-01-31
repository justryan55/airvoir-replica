import styled from "styled-components";
import Faq from "react-faq-component";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 0px 15% 0px 15%;
`;

const TextLarge = styled.h1`
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 0;
  margin-bottom: 20px;
`;

const TextSmall = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  padding-top: 0;
  margin-top: 0;
`;

const data = {
  rows: [
    {
      title: "How far in advance should I book a rental car?",
      content: (
        <p>
          We offer flexible booking options to suit your needs. While booking at
          least a few days in advance is recommended to secure your preferred
          vehicle, we can accommodate last-minute reservations based on
          availability. For urgent bookings, feel free to contact us directly.
        </p>
      ),
    },
    {
      title: "What’s included with my car rental?",
      content: (
        <p>
          Our rentals come with a range of features, including unlimited
          mileage, GPS navigation, and premium insurance options. We also
          provide optional extras like child seats, Wi-Fi, and 24/7 roadside
          assistance to ensure your journey is smooth and stress-free.
        </p>
      ),
    },
    {
      title: "Can I bring my pet in the rental car?",
      content: (
        <p>
          Yes, we understand that pets are family too. You can bring your furry
          companions along in your rental car. Please notify us in advance to
          ensure your vehicle is prepared for a comfortable journey with your
          pet.
        </p>
      ),
    },
    {
      title:
        "How does FlexiRent ensure privacy and security for its customers?",
      content: (
        <p>
          We prioritize your privacy and security. Our fleet is well-maintained,
          and all personal information is handled with the utmost care. Our
          discreet rental process ensures that your experience remains
          confidential from start to finish.
        </p>
      ),
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowTitleTextSize: "x-large",
  //   rowContentPaddingTop: "0px",
  //   rowContentPaddingBottom: "20px",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function FAQ() {
  return (
    <Layout>
      <div>
        <TextLarge>FAQs</TextLarge>
        <TextSmall>Here are answers to questions our clients ask.</TextSmall>
      </div>
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </Layout>
  );
}
