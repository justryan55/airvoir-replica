import styled from "styled-components";

const Section = styled.section`
  position: relative;
  inset: 0% 0% auto;
  min-height: 150vh;
  height: 100%;
  background-image: linear-gradient(159deg, #375fa1, #afc9e6);
`;

const Container = styled.div`
  width: 100%;
  max-width: 64rem;

  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Padding = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 5%;
  padding-right: 5%;
`;

const SpacerSmall = styled.div`
  width: 100%;
  height: 1rem;

  @media screen and (max-width: 979px) {
    height: 0.25rem;
  }
`;

const Heading = styled.h1`
  color: #ffffff;
  letter-spacing: -4.4px;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 0;
  margin-bottom: 0;
  padding-top: 10px;
  margin-top: 10px;

  @media screen and (max-width: 979px) {
    letter-spacing: -2px;
    font-size: 2.25rem;
  }
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 1.125rem;

  @media screen and (max-width: 979px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled.div`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
`;

const ButtonOne = styled.a`
  text-align: center;
  border-radius: 10rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  border-color: #ffffff;
  background-color: #ffffff;
  color: black;
  padding: 0.5rem 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonTwo = styled.a`
  border: 1px solid #ffffff;
  text-align: center;
  border-radius: 10rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  border-color: var(--base-color-neutral--white);
  background-color: var(--base-color-neutral--white);
  color: #ffffff;
  padding: 0.5rem 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  inset: auto 0% 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaneContainer = styled.div`
  width: 100%;
  max-width: 80rem;
`;

const PlaneImage = styled.img`
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;

  @media screen and (max-width: 979px) {
    object-fit: cover;
    object-position: 90% 50%;
    height: 25rem;
  }
`;

const CloudContainer = styled.div`
  /* width: 100%; */
  display: flex;
  position: absolute;
  inset: auto 0% 0;
  overflow: hidden;
`;

const Cloud = styled.img`
  width: 100vw;
  min-width: 100vw;
  position: relative;
  top: 0;
  overflow: visible;
`;

const CloudTwo = styled.img`
  width: 100vw;
  min-width: 100vw;
  position: relative;
  top: 0;
  overflow: visible;
`;

const Gradient = styled.div`
  background-color: #fff;
  width: 100%;
  height: 10px;
  position: absolute;
  inset: auto 0% -6px;
`;

export default function About() {
  return (
    <Section>
      <Container>
        <Padding>
          <svg
            width="108"
            height="24"
            viewBox="0 0 108 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7819 0H9.01013L0 24C1.77315 23.5404 3.65194 23.109 5.62407 22.7005L7.09259 18.4534H15.4988L16.3387 20.8816C17.978 20.6544 19.6613 20.4431 21.3834 20.2512L13.7837 0H13.7819ZM8.36919 14.319L11.2605 5.71386L14.1834 14.319H8.36919Z"
              fill="white"
            ></path>
            <path
              d="M25.2432 6.45312V19.8477C26.7839 19.6998 28.3545 19.566 29.9481 19.4427V6.45312H25.2432Z"
              fill="white"
            ></path>
            <path
              d="M44.57 6.2038C44.2777 6.17034 43.9079 6.15625 43.4606 6.15625C42.5397 6.15625 41.6664 6.38516 40.8388 6.84473C40.0077 7.30431 39.3016 7.99279 38.7187 8.91018V6.45735H34.1494V19.167C35.6989 19.0772 37.2661 18.9944 38.8543 18.9275V13.851C38.8543 13.3791 38.9477 12.9213 39.1413 12.4741C39.3315 12.0268 39.6273 11.6218 40.0323 11.2626C40.4127 10.9281 40.8388 10.6974 41.3072 10.5742C41.7791 10.4509 42.2703 10.3893 42.7862 10.3893C43.5716 10.3893 44.2336 10.4562 44.7707 10.5918L45.3412 6.32177C45.1176 6.27599 44.8587 6.23725 44.5682 6.2038H44.57Z"
              fill="white"
            ></path>
            <path
              d="M60.3999 6.45312L56.468 18.6556L52.5361 6.45312H47.0898L51.8951 18.6856C54.885 18.6979 57.8309 18.7542 60.7168 18.8546L65.6102 6.45312H60.3999Z"
              fill="white"
            ></path>
            <path
              d="M83.4928 11.3075C83.0878 10.1541 82.5014 9.17863 81.7284 8.3845C80.9554 7.58684 80.0187 6.9776 78.9199 6.55148C77.8229 6.12536 76.5921 5.91406 75.2222 5.91406C73.8523 5.91406 72.6584 6.12536 71.5579 6.55148C70.4609 6.9776 69.5259 7.58684 68.7512 8.3845C67.9782 9.17863 67.383 10.1541 66.9692 11.3075C66.5554 12.4608 66.3477 13.7568 66.3477 15.1883C66.3477 16.6199 66.5378 17.9933 66.9182 19.1396C68.7477 19.2488 70.5507 19.3685 72.3221 19.5111C72.2799 19.4565 72.2376 19.4002 72.1989 19.3421C71.5456 18.3877 71.2234 17.0037 71.2234 15.1883C71.2234 13.3729 71.5526 12.0294 72.2147 11.0891C72.8768 10.1471 73.8787 9.67518 75.2222 9.67518C76.5657 9.67518 77.5694 10.1471 78.2297 11.0891C78.8917 12.0276 79.2228 13.3958 79.2228 15.1883C79.2228 16.9808 78.89 18.3595 78.2297 19.3227C78.0518 19.5798 77.8529 19.8034 77.6257 19.9901C79.3865 20.1679 81.1086 20.3651 82.7902 20.5764C83.0561 20.1239 83.2832 19.6309 83.4734 19.1061C83.8907 17.9528 84.095 16.648 84.095 15.1883C84.095 13.7286 83.896 12.4608 83.491 11.3075H83.4928Z"
              fill="white"
            ></path>
            <path
              d="M87.6943 6.45312V21.2581C89.3108 21.5064 90.8814 21.7688 92.3992 22.047V6.45312H87.6943Z"
              fill="white"
            ></path>
            <path
              d="M107.021 6.2038C106.731 6.17034 106.359 6.15625 105.912 6.15625C104.994 6.15625 104.118 6.38516 103.29 6.84473C102.459 7.30431 101.756 7.99279 101.173 8.91018V6.45735H96.6006V22.8753C98.2399 23.2257 99.8106 23.6148 101.305 24.0022V13.851C101.305 13.3791 101.402 12.9213 101.593 12.4741C101.783 12.0268 102.078 11.6218 102.483 11.2626C102.864 10.9281 103.29 10.6974 103.762 10.5742C104.23 10.4509 104.725 10.3893 105.239 10.3893C106.025 10.3893 106.687 10.4562 107.224 10.5918L107.794 6.32177C107.571 6.27599 107.312 6.23725 107.021 6.2038Z"
              fill="white"
            ></path>
          </svg>
          <div>
            <Heading>
              Wherever You Need to be, Whenever you need to be there.
            </Heading>
            <SpacerSmall />
            <Text>
              Airvoir is a cutting edge jet charter company offering flexible
              and personalized travel solutions across the globe. Our dedication
              to world-class service and unmatched convenience ensures that
              every flight is tailored to your needs, creating an exceptional
              travel experience wherever you go.
            </Text>
          </div>
          <ButtonGroup>
            <ButtonOne>About us</ButtonOne>
            <ButtonTwo>Follow us on Linkedin</ButtonTwo>
          </ButtonGroup>
        </Padding>
      </Container>
      <ImageContainer>
        <PlaneContainer>
          <PlaneImage src="images/plane-about.webp" />
        </PlaneContainer>
        <CloudContainer>
          <Cloud src="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6622457b7f4627cc67f803e0_about%20Clouds%20bottom(1).webp" />
          <CloudTwo src="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/6622457b7f4627cc67f803e0_about%20Clouds%20bottom(1).webp" />
        </CloudContainer>
      </ImageContainer>
      <Gradient />
    </Section>
  );
}
