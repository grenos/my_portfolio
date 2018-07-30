import React from 'react';

import './style.css';

import styled from 'styled-components';

import { Col } from 'reactstrap';

let cardStyle = {
  textAlign: 'center',
  paddingBottom: '2em'
};

const Title = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  font-weight: 300;
`;

const SubTitle = styled.h3`
  font-family: 'Yantramanav', sans-serif;
  color: white;
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 1em;
`;

const ProjectAlt = props => {
  const { title, tech, webUrl, gitHub, background } = props.project;

  return (
    <Col md="6" lg="4" style={cardStyle}>
      <Title
        style={{
          background: `${background}`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {title.toUpperCase()}
      </Title>
      <SubTitle>{tech}</SubTitle>

      <div className="links">
        <a href={webUrl} target="_blank">
          Web
        </a>
        <a href={gitHub} target="_blank">
          GitHub
        </a>
      </div>
    </Col>
  );
};

export default ProjectAlt;
