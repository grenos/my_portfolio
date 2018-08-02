import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';
import './style.css';

const LinkerWrap = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const LinkItem = styled.div`
  margin: 0 0 1em 1em;
`;

let linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'Josefin Sans'
};

const Linker = () => {
  return (
    <LinkerWrap>
      <Scrollspy
        items={[
          'delecipes',
          'popcorn style',
          'react components',
          'contact list',
          //'bootstrap cards',
          'restaurant template',
          'this portfolio'
        ]}
        currentClassName="is-active"
        offset={-240}
      >
        <LinkItem>
          <NavLink smooth to="/#delecipes" style={linkStyle}>
            <span className="line" />
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink smooth to="/#popcorn style" style={linkStyle}>
            <span className="line" />
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink smooth to="/#react components" style={linkStyle}>
            <span className="line" />
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink smooth to="/#contact list" style={linkStyle}>
            <span className="line" />
          </NavLink>
        </LinkItem>
        {/* <LinkItem>
          <NavLink smooth to="/#bootstrap cards" style={linkStyle}>
            <span className="line" />
          </NavLink>
        </LinkItem> */}
        <LinkItem>
          <NavLink smooth to="/#restaurant template" style={linkStyle}>
            <span className="line" />
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink smooth to="/#this portfolio" style={linkStyle}>
            <span className="line" />
          </NavLink>
        </LinkItem>
      </Scrollspy>
    </LinkerWrap>
  );
};

export default Linker;
