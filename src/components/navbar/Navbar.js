import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { media } from '../mediaQTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faUser } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

// const sizes = {
//   hdScreen: 1920,
//   inch15: 1536,
//   ipadPro: 1024,
//   ipad: 768,
//   plusPhone: 576,
//   iphoneX8: 375,
//   iphoneSE: 320
// };

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

  ${media.plusPhone`z-index: 2; background: rgba(0, 0, 0, .5)`};
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
  ${media.hdScreen`font-size: 1.6em;`};
`;

const Url = styled.a`
  color: white;
`;

const Navbar = () => {
  return (
    <div>
      <NavwWrapper>
        <Link to="/">
          <Logo>
            <MediaQuery query="(max-device-width: 577px)">
              <Title>VG</Title>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 578px)">
              <Title>Vasilis Green</Title>
            </MediaQuery>
          </Logo>
        </Link>

        <Links>
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
