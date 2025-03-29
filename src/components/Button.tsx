import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  border: none;
  color: var(--white);
  border-radius: 0.8rem;
  padding: 1.6rem 4rem;
  background-color: var(--green-600);
  cursor: pointer;
`;

export default function Button() {
  return <StyledButton>Submit</StyledButton>;
}
