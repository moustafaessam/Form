import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Title from "./components/Title";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "./components/InputField";
import RadioField from "./components/RadioField";

const StyledMainContainer = styled.form`
  background-color: var(--white);
  padding: 4rem;
  border-radius: 1.6rem;
  max-width: 73.6rem;
  width: 100%;
  margin: 0 2.4rem;
  @media (max-width: 1100px) {
  }
  @media (max-width: 620px) {
    padding: 2.4rem;
  }
`;

export const StyledDivdedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  @media (max-width: 620px) {
    flex-direction: column;
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
            <StyledDivdedContainer>
              <InputField fieldType="first name" />
              <InputField fieldType="last name" />
            </StyledDivdedContainer>
            <InputField fieldType="email" />
            <RadioField />
          </StyledInnerContainer>
          {/* <button type="submit">Submit</button> */}
        </StyledMainContainer>
      </FormProvider>
    </>
  );
}
