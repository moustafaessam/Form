import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { FormInputs } from "../App";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 4rem 0;
`;

const StyledLabel = styled.label`
  display: flex;
  gap: 1.6rem;
  color: var(--grey-900);
  font-family: "Karla Regular";
  font-size: var(--body-sm);
  line-height: 150%;
  align-items: center;
`;

const StyledSpan = styled.span`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const StyledError = styled.p`
  font-family: "Karla Regular";
  color: var(--red);
  font-size: var(--body-sm);
`;

export default function Checklist() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <StyledContainer>
      <StyledLabel htmlFor="consent">
        <input
          type="checkbox"
          id="consent"
          {...register("consent", { required: "You must agree to proceed." })}
          aria-invalid={errors.consent ? "true" : "false"}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <StyledSpan>
          I hereby consent to being contacted by the team <sup>*</sup>
        </StyledSpan>
      </StyledLabel>
      {errors.consent && (
        <StyledError id="consent-error">{errors.consent.message}</StyledError>
      )}
    </StyledContainer>
  );
}
