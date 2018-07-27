import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LinkerWrap = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
`;

const LinkItem = styled.div`
  margin: 0 2.35em 2em 0;
`;

let linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'Josefin Sans'
};

const Linker = () => {
  return (
    <LinkerWrap>
      <LinkItem>
        <NavLink to="/DELICIPES" style={linkStyle}>
          1
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="2" style={linkStyle}>
          2
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="3" style={linkStyle}>
          3
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="4" style={linkStyle}>
          4
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="5" style={linkStyle}>
          5
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="6" style={linkStyle}>
          6
        </NavLink>
      </LinkItem>
    </LinkerWrap>
  );
};

export default Linker;
