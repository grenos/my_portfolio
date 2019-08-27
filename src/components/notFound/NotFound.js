import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/mediaQTemplate';
import { Link } from 'react-router-dom';

let flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
};

let text = {
  color: 'white',
  fontSize: '20vw',
  fontFamily: 'Oswald',
  lineHeight: 0
};

const Img = styled.img`
  margin-left: -57px;
  width: 20vw;
  height: auto;

  ${media.ipadPro`margin-left: -45px;`};
  ${media.smallLaptop`margin-left: -60px;`};
  ${media.inch15`margin-left: -74px;`};
  ${media.hdScreen`margin-left: -83px;`};
  ${media.ipad`margin-left: -34px;`};
  ${media.plusPhone`margin-left: -18px;`};
  ${media.iphoneX8`margin-left: -17px;`};
  ${media.iphoneSE`margin-left: -14px;`};
`;

const Back = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 1.4em;
`;

const BackLink = styled.h3`
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 1.3em;
  margin: 0 0 0.8em 0;
`;

export default () => {
  return (
    <div>
      <div style={flex}>
        <h1 style={text}>|404|</h1>
        <Img
          src={`https://media.giphy.com/media/3oFzmeVbeXIfBUl5sI/giphy.gif`}
          alt="404"
        />
      </div>
      <Back>
        <Link to="/">
          <BackLink>Back</BackLink>
        </Link>
      </Back>
    </div>
  );
};
