import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { media } from '../helpers/mediaQTemplate';
import styled from 'styled-components';
import './style.css';

let flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
};

let centerFlex = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  marginBottom: 'auto'
};

const Text = styled.h1`
  color white;
  font-family: 'Inconsolata', monospace;
  font-weight: 400;
  font-size: 1.5em;
  letter-spacing: 1px;
  line-height: 1.3em;


  ${media.ipadPro`font-size: 1.8em;`};
  ${media.inch15`font-size: 1.8em;`};
  ${media.hdScreen`font-size: 2em;`};
  ${media.plusPhone`font-size: 1em;`};
`;

const About = () => {
  return (
    <div>
      <Container style={flex}>
        <Row style={centerFlex} className="media-width landscape">
          <Col md="8">
            <Text>
              <div style={{ color: 'grey' }}>
                /* <br />
                I'm Vasilis. I'm a frontend developer. I like building things
                with cool design and nice functionality.
                <br />
                */
              </div>
              <br />
              <div>
                <span style={{ color: 'yellowgreen' }}>const</span>{' '}
                <span style={{ color: 'orange' }}>technologies</span> ={' '}
                <span style={{ color: 'yellow' }}>[</span> <br />
                <div style={{ paddingLeft: '1em', margin: 0 }}>
                  'HTML-CSS3-Sass', 'ES5-ES6', 'jQuery',
                  'Bootstrap-Materialize', 'React-Redux', 'Webpack-Babel-Gulp',
                  'Git'
                </div>
                <span style={{ color: 'yellow' }}>]</span>;
              </div>
              <br />
              <div>
                <span style={{ color: 'yellowgreen' }}>const</span>{' '}
                <span style={{ color: 'orange' }}>
                  worksHard, learnsDaily, coffee
                </span>{' '}
                = <span style={{ color: '#26a69a' }}>true</span>;
                <br />
                <span style={{ color: 'yellowgreen' }}>let</span>{' '}
                <span style={{ color: 'orange' }}>sleep</span> ={' '}
                <span style={{ color: '#26a69a' }}>undefined</span>;
              </div>
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
