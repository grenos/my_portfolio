import React from 'react';

import './style.css';
import styled from 'styled-components';
import { Form, Container, Col } from 'reactstrap';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Col md="6">
          <Form
            method="POST"
            action="https://formspree.io/vasilis.green@gmail.com"
          >
            <FormGroup>
              <label className="labels">Subject</label>
              <input autoFocus className="inputs" type="text" name="name" />
            </FormGroup>

            <FormGroup>
              <label className="labels">@Email</label>
              <input className="inputs" type="email" name="_replyto" />
            </FormGroup>

            <FormGroup>
              <label className="labels">Message</label>
              <input
                style={{ height: '200px' }}
                className="inputs"
                type="textarea"
                name="message"
              />
            </FormGroup>

            <div className="submit-wrap">
              <input className="submit" type="submit" value="Send" />
            </div>

            <input type="hidden" name="_format" value="plain" />
            <input type="hidden" name="_subject" value="New submission!" />
            <input
              type="hidden"
              name="_next"
              value="https://site.io/thanks.html"
            />
          </Form>
        </Col>
      </Wrapper>
    </Container>
  );
};

export default Contact;
