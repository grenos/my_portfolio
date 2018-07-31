import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styled from 'styled-components';

let flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
};

const Text = styled.h1`
  color white;
  font-family: 'Inconsolata', monospace;
  font-weight: 400;
  font-size: 1.5em;
  letter-spacing: 1px;
  line-height: 1.3em;
`;

const About = () => {
  return (
    <div>
      <Container>
        <Row style={flex}>
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
