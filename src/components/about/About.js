import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { media } from '../helpers/mediaQTemplate';
import styled from 'styled-components';
import './style.css';

let flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
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


  ${media.ipadPro`font-size: 1.6em;`};
  ${media.inch15`font-size: 1.5em;`};
  ${media.smallerLaptop`font-size: 1.2em;`};
  ${media.hdScreen`font-size: 1.6em;`};
  ${media.plusPhone`font-size: 1.3em;`};
  ${media.iphoneX8`font-size: 1.4em;`};
`;




const About = () => {
  return (
    <div>
      <Container className="wrapper" style={flex}>
        <Row style={centerFlex} className="media-width landscape">
          <Col md="10">
            <Text>
              <div style={{ color: 'grey' }}>
                {'/*'} <br />
                I'm Vasilis. I'm a frontend developer. I like building things
                with cool design and nice functionality.
                <br />
                {'*/'}
              </div>
              <br />
              <div>
                <span style={{ color: 'yellowgreen' }}>const</span>{' '}
                <span style={{ color: 'orange' }}>technologies</span> ={' '}
                <span style={{ color: 'yellow' }}>{'{'}</span>

                <ul className="about-list">

                  <li className="about-list-item"> <span>styles</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'CSS', 'Scss/Less', 'BEM', 'Styled-Components'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>

                  <li className="about-list-item"> <span>languges</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'ES6/ES7', 'TypeScript'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>

                  <li className="about-list-item"> <span>frameworks</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'React', 'React Native'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>

                  <li className="about-list-item"> <span>libraries</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'Redux', 'Thunk/Saga'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>

                  <li className="about-list-item"> <span>animation</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'React-Spring', 'React Native Animated Api', 'GSAP'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>

                  <li className="about-list-item"> <span>tdd</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'Jest', 'Enzyme', 'React Testing Library'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>

                  <li className="about-list-item"> <span>transpilers</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'Babel', 'Webpack', 'Parcel'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>

                  <li className="about-list-item"> <span>git</span>:
                      <span style={{ color: 'yellow' }}> {'['}</span>
                    'Github'
                      <span style={{ color: 'yellow' }}>{']'}</span>,
                    </li>


                </ul>
                <span style={{ color: 'yellow' }}>{'}'}</span>
              </div>
              <br />
              <div>
                <span style={{ color: 'yellowgreen' }}>const</span>{' '}
                <span style={{ color: 'orange' }}>
                  worksHard, learnsDaily, coffee
                </span>{' '}
                = <span style={{ color: '#26a69a' }}>true</span>
                <br />
                <span style={{ color: 'yellowgreen' }}>let</span>{' '}
                <span style={{ color: 'orange' }}>sleep</span> ={' '}
                <span style={{ color: '#26a69a' }}>undefined</span>
              </div>
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
