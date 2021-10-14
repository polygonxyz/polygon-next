import type { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 500px;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <h1 style={{ textAlign: "center" }}>polygon-next</h1>
        <h4 style={{ textAlign: "center", marginTop: 12 }}>v2</h4>
      </Wrapper>
    </Container>
  );
};

export default Home;
