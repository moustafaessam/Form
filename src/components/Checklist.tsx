import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  gap: 1.6rem;
`;

export default function Checklist() {
  return (
    <StyledLabel>
      <input />I hereby consent to being contacted by the team <sup>*</sup>
    </StyledLabel>
  );
}
