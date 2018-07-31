import React from 'react';

import { Container, Row, Col } from 'reactstrap';

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

let img = {
  marginLeft: '-48px',
  width: '20vw',
  height: 'auto'
};

export default () => {
  return (
    <div style={flex}>
      <h1 style={text}>|404|</h1>
      <img
        style={img}
        src={`https://media.giphy.com/media/3oFzmeVbeXIfBUl5sI/giphy.gif`}
        alt="404 image"
      />
    </div>
  );
};
