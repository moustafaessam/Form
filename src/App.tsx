import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Title from "./components/Title";
import { FormProvider, useForm } from "react-hook-form";
import Name from "./components/Name";

const StyledMainContainer = styled.form`
  background-color: var(--white);
  padding: 4rem;
  border-radius: 1.6rem;
  max-width: 73.6rem;
  width: 100%;
  @media (max-width: 620px) {
    padding: 2.4rem;
  }
`;

const StyledNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  @media (max-width: 620px) {
    display: block;
  }
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
};

export default function App() {
  const form = useForm<FormInputs>();
  const { handleSubmit } = form;

  function onSubmit(data: FormInputs) {
    console.log("Form Submitted:", data);
  }

  return (
    <>
      <GlobalStyle />
      <FormProvider {...form}>
        <StyledMainContainer onSubmit={handleSubmit(onSubmit)}>
          <Title />
          <StyledInnerContainer>
            <StyledNameContainer>
              <Name nameType="first name" />
              <Name nameType="last name" />
            </StyledNameContainer>
          </StyledInnerContainer>
          <button type="submit">Submit</button>
        </StyledMainContainer>
      </FormProvider>
    </>
  );
}
