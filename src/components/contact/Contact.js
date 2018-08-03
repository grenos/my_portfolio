import React from 'react';
import validator from 'validator';

import './style.css';
import styled from 'styled-components';
import { Form, Input, Container, Col } from 'reactstrap';

let flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  flex: 0 0 auto;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      email: '',
      message: ''
    };
  }

  componentDidMount() {
    const data = sessionStorage.getItem('formData');

    if (data !== null) {
      const dataPrs = JSON.parse(data);

      this.setState({
        subject: dataPrs.subject,
        email: dataPrs.email,
        message: dataPrs.message
      });
    }
  }

  componentWillUnmount() {
    const formObj = {
      subject: this.state.subject,
      email: this.state.email,
      message: this.state.message
    };

    const formObjStr = JSON.stringify(formObj);
    sessionStorage.setItem('formData', formObjStr);
  }

  onSubjectChange = e => {
    this.setState({
      subject: e.target.value.toUpperCase()
    });
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  onSubmit = () => {
    sessionStorage.removeItem('formData');
  };

  render() {
    //
    let submit;
    let email = validator.isEmail(this.state.email);

    if (email === false || this.state.message.length < 5) {
      submit = (
        <input
          disabled
          className="submit-disabled"
          type="submit"
          value="Send"
        />
      );
    } else {
      submit = <input className="submit" type="submit" value="Send" />;
    }

    return (
      <Container style={flex}>
        <Wrapper className="landscape">
          <Col md="6">
            <Form
              method="POST"
              action="https://formspree.io/vasilis.green@gmail.com"
            >
              <FormGroup>
                <label className="labels">Subject</label>
                <Input
                  onChange={this.onSubjectChange}
                  value={this.state.subject}
                  autoFocus
                  className="inputs"
                  type="text"
                  name="name"
                  autoComplete="name"
                />
              </FormGroup>

              <FormGroup>
                <label className="labels">@Email</label>
                <Input
                  onChange={this.onEmailChange}
                  value={this.state.email}
                  className="inputs"
                  type="email"
                  name="_replyto"
                  autoComplete="email"
                />
              </FormGroup>

              <FormGroup>
                <label className="labels">Message</label>
                <Input
                  onChange={this.onMessageChange}
                  value={this.state.message}
                  style={{ height: '150px' }}
                  className="inputs"
                  type="textarea"
                  name="message"
                />
              </FormGroup>

              <div onClick={this.onSubmit} className="submit-wrap">
                {submit}
              </div>

              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_subject" value={this.state.subject} />
              <input
                type="hidden"
                name="_next"
                value="https://grenos.github.io/"
              />
            </Form>
          </Col>
        </Wrapper>
      </Container>
    );
  }
}

export default Contact;
