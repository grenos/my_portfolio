import React from 'react';
import MediaQuery from 'react-responsive';
import './style.css';
import styled from 'styled-components';
import { media } from '../helpers/mediaQTemplate';
import { Col } from 'reactstrap';

let cardStyle = {
  textAlign: 'center',
  padding: '0 .5em 4em .5em'
};

const Title = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  color: white;

  ${media.hdScreen`font-size: 3em;`};
  ${media.plusPhone`
    font-size: 2.5em;
  `};
  ${media.iphoneSE`font-size: 1.9em;`};
`;

const SubTitle = styled.h3`
  font-family: 'Yantramanav', sans-serif;
  color: white;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1em;

  ${media.hdScreen`font-size: 1.3em;`};
  ${media.plusPhone`
    font-size: 1.3em;
    line-height: 1.3em;
  `};
  ${media.iphoneSE`font-size: 1em;`};
`;

const ProjectAlt = props => {
  const { title, tech, webUrl, gitHub, background } = props.project;

  return (
    <Col xs="10" md="6" lg="4" style={cardStyle}>
      <Title
        style={{
          background: `${background}`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {title.toUpperCase()}
      </Title>
      <MediaQuery query="(min-width: 321px)">
        <SubTitle>{tech}</SubTitle>
      </MediaQuery>
      <div className="links">
        {webUrl ? (
          <a href={webUrl} target="_blank">
            Web
          </a>
        ) : null}

        {gitHub ? (
          <a href={gitHub} target="_blank">
            Github
          </a>
        ) : null}
      </div>
    </Col>
  );
};

export default ProjectAlt;
