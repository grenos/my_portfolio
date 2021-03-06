import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { media } from '../helpers/mediaQTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faUser, faHome } from '@fortawesome/free-solid-svg-icons';

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
  z-index: 2;

  ${media.plusPhone`
    background: rgba(28, 44, 66, .98);
    position: fixed;
    bottom: 0;
    height: 55px;
    border-top: 2px solid rgba(29, 46, 70, 0.98);
   
  `};
  ${media.hdScreen`height: 120px;`};
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

  ${media.hdScreen`font-size: 2.5em;`};
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1.5em;

  ${media.plusPhone`margin-right: 0; width: 100vw; justify-content: space-around;`};
`;

const LinkItem = styled.div`
  margin: 0.5em;

  color: white;
  &: hover {
    transition: 1s cubic-bezier(0.8, 0.5, 0.5, 1.4);
    transform: rotateX(360deg);
    cursor: pointer;
  }

  ${media.plusPhone`font-size: 1.2em; margin-left: 1em;`};
  ${media.iphoneSE`font-size: 1em;`};
  ${media.hdScreen`font-size: 1.6em;`};
`;

const Url = styled.a`
  color: white;
`;

const Navbar = () => {
  return (
    <div>
      <NavwWrapper>
        <MediaQuery query="(min-width: 578px)">
          <Link to="/">
            <Logo>
              <Title>Vasilis Green</Title>
            </Logo>
          </Link>
        </MediaQuery>

        <Links>
          <MediaQuery query="(max-width: 577px)">
            <Link to="/">
              <LinkItem>
                <FontAwesomeIcon icon={faHome} size="lg" />
              </LinkItem>
            </Link>
          </MediaQuery>
          <Link to="/about">
            <LinkItem>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </LinkItem>
          </Link>
          <LinkItem>
            <Url href="https://twitter.com/GreenVasilis" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Url>
          </LinkItem>
          <LinkItem>
            <Url href="https://github.com/grenos" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Url>
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
