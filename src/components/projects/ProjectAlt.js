import React from 'react';
import MediaQuery from 'react-responsive';
import './style.css';
import styled from 'styled-components';
import { media } from '../helpers/mediaQTemplate';
import { Col } from 'reactstrap';

let cardStyle = {
  textAlign: 'center',
  padding: '0 0 2em 0'
};

const Title = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  font-weight: 300;

  ${media.hdScreen`font-size: 3em;`};
  ${media.iphoneSE`font-size: 1.4em;`};
`;

const SubTitle = styled.h3`
  font-family: 'Yantramanav', sans-serif;
  color: white;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 1em;

  ${media.hdScreen`font-size: 1.3em;`};
  ${media.iphoneSE`font-size: .8em;`};
`;

const ProjectAlt = props => {
  const { title, tech, webUrl, gitHub, background } = props.project;

  return (
    <Col xs="8" md="6" lg="4" style={cardStyle}>
      <Title
        style={{
          background: `${background}`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {title.toUpperCase()}
      </Title>
      <MediaQuery query="(min-device-width: 321px)">
        <SubTitle>{tech}</SubTitle>
      </MediaQuery>
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
