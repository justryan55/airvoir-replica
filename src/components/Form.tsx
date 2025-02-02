import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
`;

const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  padding: 1.5rem;
`;

const Label = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const Input = styled.input`
  border: 1px solid var(--border-color--border-secondary);
  background-color: var(--background-color--background-secondary);
  color: var(--text-color--text-primary);
  border-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  height: auto;
  min-height: 2.75rem;
  margin-bottom: 0;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #000000;
    color: #ffffff;
    padding: 1rem;
    min-height: 2.75rem;
    margin-top: 20px;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
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
  }
`;

export default function Form() {
  return (
    <Container>
      <FormContainer>
        <FormFieldWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="images/arrow-up-right.svg" />
            <Label>Pick-up location</Label>
          </div>
          <Input type="text" placeholder="City, airport or station" />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="images/arrow-down-right.svg" />
            <Label>Drop-off location</Label>
          </div>
          <Input type="text" placeholder="City, airport or station" />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label>Pick-up date</Label>
          <Input type="text" />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Label>Drop-off date</Label>
          <Input type="text" />
        </FormFieldWrapper>
        <StyledButton variant="contained">Search</StyledButton>
      </FormContainer>
    </Container>
  );
}
