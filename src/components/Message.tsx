import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { StyledError, StyledLabel } from "./InputField";
import { FormInputs } from "../App";

const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  outline: none;
  font-family: "Karla Regular";
  font-size: var(--body-md);
  line-height: 150%;
  &:focus,
  &:hover {
    outline: 1px solid var(--green-600) !important;
  }
`;

export default function Message() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <StyledContainer>
      <StyledLabel htmlFor="message">
        Message <sup>*</sup>
      </StyledLabel>
      <StyledTextArea
        id="message"
        {...register("message", { required: "This field is required" })}
        aria-invalid={errors.message ? "true" : "false"}
        style={{
          outline: errors.message ? "1px solid var(--red)" : "",
          border: errors.message ? "none" : "1px solid var(--grey-500)",
        }}
      />
      {errors.message && (
        <StyledError id="message-error">{errors.message.message}</StyledError>
      )}
    </StyledContainer>
  );
}
