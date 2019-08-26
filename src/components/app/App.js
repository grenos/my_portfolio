/* eslint-disable import/first */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../../redux/store/store';
import {
  toggleState,
  toggleStateTrue,
  toggleStateFalse
} from '../../redux/action/actions';

import { ProjectData } from '../helpers/ProjectData';
import MediaQuery from 'react-responsive';
import './style.css';

import Linker from '../Linker/Linker';
import Project from '../projects/Project';
import ProjectAlt from '../projects/ProjectAlt'
import Footer from '../footer/Footer';

import { media } from '../helpers/mediaQTemplate';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';


const StyledWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
`;

const AppWrap = styled.div`
  ${media.plusPhone`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3em;
  `};
`;

const Loader = styled.div`
  font-size: 1.5em;
  color: #fff;
`;

let flexStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh'
};



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });

    if (this.state.width <= 819) {
      store.dispatch(toggleStateTrue());
    } else if (this.state.width >= 820) {
      store.dispatch(toggleStateFalse());
    }
  };

  renderLoader = () => <Loader>.</Loader>;

  render() {
    //
    let ProjectView;
    //
    if (this.props.toggleData) {
      ProjectView = (
        <Container className="mediaQuery" style={flexStyle}>
          <StyledWrapper>
            <Row
              style={{
                paddingTop: '5em',
                justifyContent: 'center'
              }}
            >
              {ProjectData.map(project => {
                return (
                  <ProjectAlt key={project.id} project={project} />
                )
              })}
            </Row>
          </StyledWrapper>
        </Container>
      );
    } else {
      ProjectView = (
        <div>
          <MediaQuery query="(min-width: 1025px)">
            <Linker />
          </MediaQuery>
          {ProjectData.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      );
    }
    //
    return (
      <AppWrap>
        {ProjectView}

        <MediaQuery query="(min-width: 820px)">
          <Footer
            toggleView={toggleData => {
              this.setState({
                toggleData: toggleData
              });
            }}
          />
        </MediaQuery>
      </AppWrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleData: state.mainReducer.toggle
  };
};

export default connect(
  mapStateToProps,
  { toggleState, toggleStateTrue, toggleStateFalse }
)(App);
