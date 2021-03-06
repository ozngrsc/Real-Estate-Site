import styled from "styled-components";
import React from "react";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  background: #000;
  margin-top: 5rem;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 650px;
  align-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  margin: auto;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 0 5rem;
  background: #fff;
  width: 100%;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  p {
    margin-bottom: 2rem;
    font-size: 1rem;

    @media screen and (max-width: 1100px) {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 1100px) {
    font-size: 1.3rem;
    padding: 0 2rem;
  }
`;

const ColumnRight = styled.div`
  align-items: center;

  img {
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      padding: 0 2rem 10rem 2rem;
    }
  }
`;

const InteriorSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" secondary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InteriorSection;
