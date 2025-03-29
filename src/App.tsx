import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const StyledMainContainer = styled.form`
  background-color: var(--white);
  padding: 4rem;
  border-radius: 1.6rem;
  @media (max-width: 620px) {
    padding: 2.4rem;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <StyledMainContainer></StyledMainContainer>
    </>
  );
}
