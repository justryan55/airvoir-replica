import styled from "styled-components";

const TestimonialContainer = styled.div`
  grid-area: span 1 / span 1 / span 1 / span 1;
  width: 100%;
  position: relative;
`;

const TestimonialContent = styled.div`
  border: 1px none var(--border-color--border-primary);
  background-color: var(--background-color--background-primary);
  border-radius: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 2rem;
  display: flex;
`;

const RatingContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const RatingIcon = styled.svg`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
`;

const TextMedium = styled.p`
  font-size: 1.125rem;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const TestimonialPosterContainer = styled.div`
  text-align: left;
  align-items: center;
  display: flex;
`;

const TestimonialImage = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  min-height: 3rem;
  padding-right: 10px;
`;

const TestimonialName = styled.p`
  font-weight: 600;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const TestimonialPosition = styled.p`
  color: var(--text-color--text-secondary);
  margin-top: 0;
  padding-top: 0;
`;

interface TestimonialProps {
  text: string;
  image: string;
  name: string;
  location: string;
}
export default function Testimonial({
  text,
  image,
  name,
  location,
}: TestimonialProps) {
  return (
    <TestimonialContainer>
      <TestimonialContent>
        <RatingContainer>
          <RatingIcon
            width="100%"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
              fill="currentColor"
            ></path>
          </RatingIcon>
          <RatingIcon
            width="100%"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
              fill="currentColor"
            ></path>
          </RatingIcon>
          <RatingIcon
            width="100%"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
              fill="currentColor"
            ></path>
          </RatingIcon>
          <RatingIcon
            width="100%"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
              fill="currentColor"
            ></path>
          </RatingIcon>
          <RatingIcon
            width="100%"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
              fill="currentColor"
            ></path>
          </RatingIcon>
        </RatingContainer>
        <TextMedium>{text} </TextMedium>
        <TestimonialPosterContainer>
          <TestimonialImage src={image} />
          <div>
            <TestimonialName>{name}</TestimonialName>
            <TestimonialPosition>{location}</TestimonialPosition>
          </div>
        </TestimonialPosterContainer>
      </TestimonialContent>
    </TestimonialContainer>
  );
}
