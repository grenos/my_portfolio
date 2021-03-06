import React from 'react';
import { media } from '../helpers/mediaQTemplate';
import styled from 'styled-components';

import './style.css';
import { Container, Row, Col } from 'reactstrap';

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  ${media.ipadPro`height: 50vh`};
`;

let wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center'
};

const Title = styled.span`
  font-family: 'Oswald', sans-serif;
  font-size: 6em;
  margin: 0;
  font-weight: 700;

  ${media.inch15`font-size: 6.8em;`};
  ${media.hdScreen`font-size: 8.2em;`};
  ${media.ipadPro`font-size: 4.4em;`};
  ${media.ipad`font-size: 4em;`};
`;

const Big = styled.span`
  font-size: 1.2em;
`;

const SubTitle = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  color: white;
  letter-spacing: 1px;
  font-size: 1.5em;
  margin: 0.5em;

  ${media.inch15`font-size: 1.8em;`};
  ${media.hdScreen`font-size: 2.1em;`};
`;

const Text = styled.h5`
  font-family: 'Yantramanav', sans-serif;
  font-weight: 400;
  color: white;
  letter-spacing: 1px;
  font-size: 1em;
  line-height: 2em;
  margin: 0.5em;

  ${media.inch15`font-size: 1.2em;`};
  ${media.hdScreen`font-size: 1.5em;`};
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

  ${media.inch15`font-size: 1.1em; `};
  ${media.hdScreen`font-size: 1.5em;`};
  ${media.ipad`font-size: .9em;`};
`;

const Project = props => {
  const { title, tech, info, webUrl, gitHub, background } = props.project;

  // take first letter of each title to add css class to it later
  const titleStyle = title[0].toUpperCase();

  // cut firslt lette of each title
  const titleCut = title.slice(1).toUpperCase();

  return (
    <AppWrapper id={title}>
      <Container className="ipad-landscape" style={wrapperStyle}>
        <Row className="justify-content-center">
          <Col md="10" lg="12">
            <Title
              style={{
                background: `${background}`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              <Big className="rotate">{titleStyle}</Big>
              {titleCut}
            </Title>
            <SubTitle>{tech}</SubTitle>
          </Col>
          <Col md="8">
            <Text>{info}</Text>
          </Col>
          <Col md="6">
            {webUrl ? (
              <a href={webUrl} target="_blank" rel="noopener noreferrer">
                <Button className="fill">WEB</Button>
              </a>
            ) : null}

            {gitHub ? (
              <a href={gitHub} target="_blank" rel="noopener noreferrer">
                <Button className="fill">GITHUB</Button>
              </a>
            ) : null}
          </Col>
        </Row>
      </Container>
    </AppWrapper>
  );
};

export default Project;
