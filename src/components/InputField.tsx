import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { FormInputs } from "../App";

const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: "Karla Regular";
  font-size: var(--body-sm);
  line-height: 150%;
  color: var(--grey-900);
  text-transform: capitalize;
`;

const StyledInput = styled.input`
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

export const StyledError = styled.p`
  font-family: "Karla Regular";
  color: var(--red);
  font-size: var(--body-sm);
`;

type InputProps = {
  fieldType: "first name" | "last name" | "email";
};

export default function InputField({ fieldType }: InputProps) {
  const fieldName =
    fieldType === "first name"
      ? "firstName"
      : fieldType === "last name"
      ? "lastName"
      : "email";

  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <StyledContainer>
      <StyledLabel htmlFor={fieldName}>
        {fieldType} <sup>*</sup>
      </StyledLabel>
      <StyledInput
        type={fieldType === "email" ? "email" : "text"}
        id={fieldName}
        autoComplete="on"
        {...register(fieldName, {
          required: "This field is required",
          ...(fieldType === "email" && {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }),
        })}
        aria-invalid={errors[fieldName] ? "true" : "false"}
        style={{
          outline: errors[fieldName] ? "1px solid var(--red)" : "",
          border: errors[fieldName] ? "none" : "1px solid var(--grey-500)",
        }}
      />
      {errors[fieldName] && (
        <StyledError>{errors[fieldName]?.message}</StyledError>
      )}
    </StyledContainer>
  );
}
