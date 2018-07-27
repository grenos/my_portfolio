import React from 'react';

import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap-grid.css';
import { Container, Row, Col } from 'reactstrap';

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
  background: #ee9ca7;
  background: linear-gradient(to bottom, #ffdde1, #ee9ca7);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  font-weight: 100;
  padding: 0.5em 1.5em 0.3em;
  margin: 1em;
  border-radius: 0.2em;
  &:hover {
    cursor: pointer;
  }
`;

const Project = props => {
  const { title, tech, info, webUrl, gitHub } = props.project;
  return (
    <AppWrapper>
      <Container style={wrapperStyle}>
        <Row className="justify-content-center">
          <Col md="10">
            <Title>{title}</Title>
            <SubTitle>{tech}</SubTitle>
          </Col>
          <Col md="8">
            <Text>{info}</Text>
          </Col>
          <Col md="6">
            <Button>
              <a href={webUrl} />WEB
            </Button>
            <Button>
              <a href={gitHub} />GITHUB
            </Button>
          </Col>
        </Row>
      </Container>
    </AppWrapper>
  );
};

export default Project;
