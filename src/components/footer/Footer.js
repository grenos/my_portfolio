import React from 'react';
import { media } from '../helpers/mediaQTemplate';
import './style.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import store from '../../redux/store/store';
import { toggleState } from '../../redux/action/actions';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 1.4em;
`;

const ErrorLink = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 1.4em;
`;

const Info = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;

  ${media.inch15`font-size: 1.4em;`};
  ${media.hdScreen`font-size: 2em;`};
`;

const Star = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  font-size: 2.6em;
  margin: 0;
`;

const Footer = props => {
  // const classes can combine multiple classes (used as an option was not needed here)
  const toggle = !props.toggleData ? null : 'strike-through';
  const classes = `${toggle}`;

  return (
    <div>
      <FooterWrapper>
        <Info
          className={classes}
          onClick={() => {
            store.dispatch(toggleState());
          }}
        >
          Toggle View
        </Info>
      </FooterWrapper>
      <ErrorLink>
        <Link to="/error">
          <Star>*</Star>
        </Link>
      </ErrorLink>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toggleData: state.mainReducer.toggle
  };
};

export default connect(
  mapStateToProps,
  { toggleState }
)(Footer);
