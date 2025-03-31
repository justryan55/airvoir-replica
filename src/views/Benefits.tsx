/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0px 15% 5em 15%;
  background-color: #f4f4f5;

  @media screen and (max-width: 979px) {
    margin-top: 5px;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 60%;

  @media screen and (max-width: 979px) {
    width: 80%;
  }
`;

const SemiboldText = styled.p`
  font-weight: 600;
`;

const Text = styled.h1`
  letter-spacing: -3.2px;
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.1;
  will-change: transform;
  padding-bottom: 50px;

  @media screen and (max-width: 979px) {
    letter-spacing: -1.5px;
    font-size: 2rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  will-change: transform;
  column-gap: 50px;

  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  border-style: solid none none;
  border-width: 1px;
  border-color: var(--base-color-neutral--neutral-lighter)
    var(--border-color--border-secondary) var(--border-color--border-secondary);
  flex-flow: column;
  padding-top: 1rem;
  display: flex;
  will-change: transform;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px;

  @media screen and (max-width: 979px) {
    justify-content: center;
    text-align: center;
    font-size: 0.75em;
    padding: 20px 10px 15px 10px;
  }
`;

export default function Benefits() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    featuresRef.current.forEach((feature) => {
      gsap.fromTo(
        feature,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: feature,
            start: "bottom 10%",
            end: "bottom 10%",
            scrub: true,
          },
        }
      );
    });

    if (textRef.current) {
      const textContent = textRef.current.innerText;
      const splitText = textContent.split("");

      textRef.current.innerHTML = splitText
        .map((char: any) => `<span class="split-char">${char}</span>`)
        .join("");

      const animation = gsap.fromTo(
        ".split-char",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power1.out",
          scrollTrigger: {
            trigger: textRef.current,
            pin: true,
            pinSpacing: true,
            start: "top 10%",
            end: "bottom 10%",
            scrub: true,
            // markers: true,
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        animation.kill();
      };
    }
  }, []);

  return (
    <Layout>
      <Container>
        <Text ref={textRef}>
          Indulge in a transformative approach to private aviation, where the
          experience is tailored to your needs. Our unwavering commitment to
          innovation fuels personalized service that elevates your travel
          experience beyond expectation.
        </Text>
      </Container>
      <Features>
        <Feature ref={(el) => (featuresRef.current[0] = el)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="clip0_10234_332">
              <rect width="24" height="24" fill="white"></rect>
            </clipPath>
            <g clipPath="url(#clip0_10234_332)">
              <path
                d="M11.1 14.9984H12.9C13.05 14.9984 13.1792 14.9359 13.2875 14.8109C13.3958 14.6859 13.4333 14.5484 13.4 14.3984L12.925 11.7734C13.2583 11.6068 13.5208 11.3651 13.7125 11.0484C13.9042 10.7318 14 10.3818 14 9.99844C14 9.44844 13.8042 8.9776 13.4125 8.58594C13.0208 8.19427 12.55 7.99844 12 7.99844C11.45 7.99844 10.9792 8.19427 10.5875 8.58594C10.1958 8.9776 10 9.44844 10 9.99844C10 10.3818 10.0958 10.7318 10.2875 11.0484C10.4792 11.3651 10.7417 11.6068 11.075 11.7734L10.6 14.3984C10.5667 14.5484 10.6042 14.6859 10.7125 14.8109C10.8208 14.9359 10.95 14.9984 11.1 14.9984ZM12 21.8984C11.8833 21.8984 11.775 21.8901 11.675 21.8734C11.575 21.8568 11.475 21.8318 11.375 21.7984C9.125 21.0484 7.33333 19.6609 6 17.6359C4.66667 15.6109 4 13.4318 4 11.0984V6.37344C4 5.95677 4.12083 5.58177 4.3625 5.24844C4.60417 4.9151 4.91667 4.67344 5.3 4.52344L11.3 2.27344C11.5333 2.1901 11.7667 2.14844 12 2.14844C12.2333 2.14844 12.4667 2.1901 12.7 2.27344L18.7 4.52344C19.0833 4.67344 19.3958 4.9151 19.6375 5.24844C19.8792 5.58177 20 5.95677 20 6.37344V11.0984C20 13.4318 19.3333 15.6109 18 17.6359C16.6667 19.6609 14.875 21.0484 12.625 21.7984C12.525 21.8318 12.425 21.8568 12.325 21.8734C12.225 21.8901 12.1167 21.8984 12 21.8984Z"
                fill="#1C1B1F"
              ></path>
            </g>
          </svg>
          <SemiboldText>Absolute privacy and security</SemiboldText>
        </Feature>
        <Feature ref={(el) => (featuresRef.current[1] = el)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_10234_356"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="white"></rect>
            </mask>

            <g mask="url(#mask0_10234_356)">
              <path
                d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V3C6 2.71667 6.09583 2.47917 6.2875 2.2875C6.47917 2.09583 6.71667 2 7 2C7.28333 2 7.52083 2.09583 7.7125 2.2875C7.90417 2.47917 8 2.71667 8 3V4H16V3C16 2.71667 16.0958 2.47917 16.2875 2.2875C16.4792 2.09583 16.7167 2 17 2C17.2833 2 17.5208 2.09583 17.7125 2.2875C17.9042 2.47917 18 2.71667 18 3V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.71667 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.71667 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z"
                fill="#1C1B1F"
              ></path>
            </g>
          </svg>
          <SemiboldText>
            Scheduling flexibility & last minute flight management
          </SemiboldText>
        </Feature>
        <Feature ref={(el) => (featuresRef.current[2] = el)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_10234_341"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9"></rect>
            </mask>
            <g mask="url(#mask0_10234_341)">
              <path
                d="M18.85 15.8984L3.725 11.6984C3.50833 11.6318 3.33333 11.5151 3.2 11.3484C3.06667 11.1818 3 10.9818 3 10.7484V6.87344C3 6.65677 3.0875 6.48594 3.2625 6.36094C3.4375 6.23594 3.625 6.20677 3.825 6.27344L4.2 6.39844C4.3 6.43177 4.38333 6.48177 4.45 6.54844C4.51667 6.6151 4.56667 6.69844 4.6 6.79844L5.2 8.59844L10 9.94844V3.12344C10 2.8401 10.1125 2.60677 10.3375 2.42344C10.5625 2.2401 10.8167 2.1901 11.1 2.27344L11.525 2.37344C11.675 2.40677 11.8042 2.4776 11.9125 2.58594C12.0208 2.69427 12.1 2.82344 12.15 2.97344L14.75 11.2484L19.75 12.6484C20.1333 12.7484 20.4375 12.9526 20.6625 13.2609C20.8875 13.5693 21 13.9151 21 14.2984C21 14.8484 20.775 15.2901 20.325 15.6234C19.875 15.9568 19.3833 16.0484 18.85 15.8984ZM4 20.9984C3.71667 20.9984 3.47917 20.9026 3.2875 20.7109C3.09583 20.5193 3 20.2818 3 19.9984C3 19.7151 3.09583 19.4776 3.2875 19.2859C3.47917 19.0943 3.71667 18.9984 4 18.9984H20C20.2833 18.9984 20.5208 19.0943 20.7125 19.2859C20.9042 19.4776 21 19.7151 21 19.9984C21 20.2818 20.9042 20.5193 20.7125 20.7109C20.5208 20.9026 20.2833 20.9984 20 20.9984H4Z"
                fill="#1C1B1F"
              ></path>
            </g>
          </svg>
          <SemiboldText>
            Access to 40,000 airports+ across the globe
          </SemiboldText>
        </Feature>
        <Feature ref={(el) => (featuresRef.current[3] = el)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_10234_365"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9"></rect>
            </mask>
            <g mask="url(#mask0_10234_365)">
              <path
                d="M9.2 8.25H14.8L12.15 3H11.85L9.2 8.25ZM11.25 20.1V9.75H2.625L11.25 20.1ZM12.75 20.1L21.375 9.75H12.75V20.1ZM16.45 8.25H21.625L19.55 4.1C19.3667 3.76667 19.1208 3.5 18.8125 3.3C18.5042 3.1 18.1583 3 17.775 3H13.85L16.45 8.25ZM2.375 8.25H7.55L10.15 3H6.225C5.84167 3 5.49583 3.1 5.1875 3.3C4.87917 3.5 4.63333 3.76667 4.45 4.1L2.375 8.25Z"
                fill="#1C1B1F"
              ></path>
            </g>
          </svg>
          <SemiboldText>
            Access to thousands of aircraft with best positioning
          </SemiboldText>
        </Feature>
      </Features>
    </Layout>
  );
}
