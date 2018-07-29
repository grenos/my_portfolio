import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styled from 'styled-components';

let flex = {
  display: 'flex',
  justifyContent: 'center'
};

const Text = styled.h1`
  color white;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 1.7em;
  letter-spacing: 1px;
  line-height: 1.3em;
  margin-top: 3em;
`;

const About = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Container>
        <Row style={flex}>
          <Col md="8">
            <Text>
              Hoodie la croix truffaut fanny pack bitters authentic messenger
              bag vaporware four loko. Air plant pitchfork cronut raw denim
              kombucha, pickled street art synth neutra lo-fi poutine irony.
              Flexitarian direct trade yuccie bitters shabby chic venmo.
              Microdosing party bicycle rights etsy mustache, blog heirloom
              ethical ramps forage letterpress keffiyeh tacos hot chicken tbh
              messenger bag.
              <br />
              <br />
              Lyft slow-carb vaporware snackwave. Cold-pressed fashion axe
              hoodie lumbersexual selvage activated charcoal, keytar sustainable
              hashtag. Direct trade celiac. Meditation farm-to-table biodiesel
              crucifix vape. Succulents fanny pack jean shorts tilde scenester,
              beard gentrify pug master cleanse.
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
