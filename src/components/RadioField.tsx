import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { FormInputs, StyledDivdedContainer } from "../App";
import { StyledError } from "./InputField";

const StyledFieldSet = styled.fieldset`
  border: none;
  min-inline-size: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLegend = styled.legend`
  width: 100%;
  float: left;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: "Karla Regular";
  font-size: var(--body-sm);
  line-height: 150%;
  color: var(--grey-900);
`;

const StyledLabel = styled.label`
  color: var(--grey-900);
  font-family: "Karla Regular";
  line-height: 150%;
  font-size: var(--body-md);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 2.4rem;
  border: 1px solid var(--grey-500);
  border-radius: 0.8rem;
  flex-grow: 1;
  cursor: pointer;
`;

const StyledInput = styled.input`
  margin: 0;
  width: 1.2rem;
  height: 1.2rem;
`;

export default function RadioField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputs>();

  return (
    <StyledFieldSet>
      <StyledLegend>
        Query Type <sup>*</sup>
      </StyledLegend>
      <StyledDivdedContainer style={{ clear: "both" }}>
        <StyledLabel>
          <StyledInput
            type="radio"
            value="general-enquiry"
            {...register("queryType", { required: "This field is required" })}
          />
          General Enquiry
        </StyledLabel>

        <StyledLabel>
          <StyledInput
            type="radio"
            value="support-request"
            {...register("queryType", { required: "This field is required" })}
          />
          Support Request
        </StyledLabel>
      </StyledDivdedContainer>

      {errors.queryType && (
        <StyledError>{errors.queryType.message}</StyledError>
      )}
    </StyledFieldSet>
  );
}
