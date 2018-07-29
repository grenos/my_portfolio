import React from 'react';

import './style.css';
import styled, { keyframes } from 'styled-components';

import { Container, Row, Col } from 'reactstrap';

// const floatAnim = keyframes`
//   from { transform: translate(0,-10px); }
//   to {transform: translate(0,10px); }
// `;

// animation: ${floatAnim} 1s ease-in-out;
// animation-fill-mode: initial;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

let wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center'
};

const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 6em;
  margin: 0;
`;

const Tilt = styled.span`
  font-size: 1.2em;
`;

const SubTitle = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  color: white;
  letter-spacing: 1px;
  font-size: 1.5em;
  margin: 0.5em;
`;

const Text = styled.h5`
  font-family: 'Yantramanav', sans-serif;
  font-weight: 100;
  color: white;
  letter-spacing: 1px;
  font-size: 1em;
  line-height: 2em;
  margin: 0.5em;
`;

const Button = styled.button`
  border: 1px solid white;
  background: transparent;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  padding: 0.5em 1.5em 0.3em;
  margin: 1em;
  border-radius: 0.2em;
  &:hover {
    cursor: pointer;
  }
`;

const Project = props => {
  const { title, tech, info, webUrl, gitHub, background } = props.project;

  // take first letter of each title to add css class to it later
  const titleStyle = title[0].toUpperCase();
  console.log(typeof titleStyle);

  // cut firslt lette of each title
  const titleCut = title.slice(1);

  return (
    <AppWrapper id={title}>
      <Container style={wrapperStyle}>
        <Row className="justify-content-center">
          <Col md="10">
            <Title
              style={{
                background: `${background}`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              <span className="rotate">{titleStyle}</span>
              {titleCut.toUpperCase()}
            </Title>
            <SubTitle>{tech}</SubTitle>
          </Col>
          <Col md="8">
            <Text>{info}</Text>
          </Col>
          <Col md="6">
            <a href={webUrl} target="_blank">
              <Button className="fill">WEB</Button>
            </a>
            <a href={gitHub} target="_blank">
              <Button className="fill">GITHUB</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </AppWrapper>
  );
};

export default Project;
