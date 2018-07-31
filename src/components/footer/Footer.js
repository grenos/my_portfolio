import React from 'react';
import { media } from '../mediaQTemplate';
import './style.css';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 1.4em;
`;

const Info = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;

  ${media.inch15`font-size: 1.4em;`};
  ${media.hdScreen`font-size: 2em;`};
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true
    };
  }

  toggleClass = () => {
    const currentState = this.state.toggle;

    this.setState({
      toggle: !currentState
    });

    // sent data up to parent
    this.props.toggleView(currentState);
  };

  render() {
    // const classes can combine multiple classes (used as an option was not needed here)
    const toggle = this.state.toggle ? null : 'strike-through';
    const classes = `${toggle}`;

    return (
      <FooterWrapper>
        <Info className={classes} onClick={this.toggleClass}>
          Toggle View
        </Info>
      </FooterWrapper>
    );
  }
}

export default Footer;
