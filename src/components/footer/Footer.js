import React from 'react';

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
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  toggleClass = () => {
    const currentState = this.state.toggle;
    this.setState({
      toggle: !currentState
    });
  };

  render() {
    //
    const toggle = this.state.toggle ? 'strike-through' : null;
    const classes = `${toggle} for-future-reference`;

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
