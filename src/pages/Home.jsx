import styled from "styled-components";
import ExploreButton from "../components/ExploreButton";
import { theme } from "../theme";
const Wrapper = styled.main`
  min-height: 100vh;
  background: url("/home/background.jpg") no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${theme.colors.white};
  padding: 0 10%;
`;
const Text = styled.div`
  max-width: 450px;
  h1 { font-family: ${theme.fonts.bellefair}; font-size: 150px; margin: 0; }
  h5 { font-family: ${theme.fonts.barlow}; font-size: 28px; letter-spacing: 4.7px; color: ${theme.colors.blue300}; margin: 0; }
`;

export default function Home() {
  return (
    <Wrapper>
      <Text>
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </Text>
      <ExploreButton onClick={() => window.scrollTo(0,0)} />
    </Wrapper>
  );
}
