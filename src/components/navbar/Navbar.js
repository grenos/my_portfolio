import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faUser } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const NavwWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 1.5em;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: white;
  letter-spacing: 1px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1.5em;
`;

const LinkItem = styled.div`
  margin: 0.5em;
  color: white;
  &: hover {
    transition: 1s cubic-bezier(0.8, 0.5, 0.5, 1.4);
    transform: rotateX(360deg);
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <div>
      <NavwWrapper>
        <Link to="/">
          <Logo>
            <Title>Vasilis Green</Title>
          </Logo>
        </Link>
        <Links>
          <Link to="/about">
            <LinkItem>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </LinkItem>
          </Link>
          <LinkItem>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </LinkItem>
          <LinkItem>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </LinkItem>
          <Link to="/contact">
            <LinkItem>
              <FontAwesomeIcon icon={faAt} size="lg" />
            </LinkItem>
          </Link>
        </Links>
      </NavwWrapper>
    </div>
  );
};

export default Navbar;
