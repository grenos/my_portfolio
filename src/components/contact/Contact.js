import React from 'react';

import './style.css';
import styled from 'styled-components';
import { Form, Input, Container, Col } from 'reactstrap';

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

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: ''
    };
  }

  onSubjectChange = e => {
    this.setState({
      subject: e.target.value
    });
  };

  render() {
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
                <input
                  onChange={this.onSubjectChange}
                  value={this.state.inputValue}
                  autoFocus
                  className="inputs"
                  type="text"
                  name="name"
                />
              </FormGroup>

              <FormGroup>
                <label className="labels">@Email</label>
                <input className="inputs" type="email" name="_replyto" />
              </FormGroup>

              <FormGroup>
                <label className="labels">Message</label>
                <Input
                  style={{ height: '100px' }}
                  className="inputs"
                  type="textarea"
                  name="message"
                />
              </FormGroup>

              <div className="submit-wrap">
                <input className="submit" type="submit" value="Send" />
              </div>

              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_subject" value={this.state.subject} />
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
  }
}

export default Contact;
