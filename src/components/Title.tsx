import styled from "styled-components";

const StyledHeader = styled.h1`
  text-transform: capitalize;
  font-family: "Karla Bold";
  font-size:var(--heading);
  letter-spacing: -0.01rem;
`;

export default function Title() {
  return <StyledHeader>Contant us</StyledHeader>;
}
