import React from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store/store';
import {
  toggleState,
  toggleStateTrue,
  toggleStateFalse
} from '../../redux/action/actions';

import { ProjectData } from '../helpers/ProjectData';
import MediaQuery from 'react-responsive';

import Linker from '../Linker/Linker';
import Project from '../projects/Project';
import ProjectAlt from '../projects/ProjectAlt';
import Footer from '../footer/Footer';

import { media } from '../helpers/mediaQTemplate';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';

const StyledWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;

  ${media.tablet`margin-top: 80px;`};
  ${media.ipad`margin-top: auto`};
  ${media.plusPhone`margin-top: 30px;`};
  ${media.iphoneX8`margin-top: 30px;`};
`;

let flexStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };
  }

  // the methods bellow are used to toggle the view state of the main window on resize
  // it works but I have to find a beter way to do it
  // because on every pixel change there is a rerender
  // but except from the times where the state changes (2-3 times)
  // all the other time it renders the same thing
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });

    if (this.state.width <= 1024) {
      store.dispatch(toggleStateTrue());
    } else if (this.state.width >= 1025) {
      store.dispatch(toggleStateFalse());
    }
  };

  render() {
    //
    let ProjectView;
    //
    if (this.props.toggleData) {
      ProjectView = (
        <Container style={flexStyle}>
          <StyledWrapper>
            <Row style={{ paddingTop: '3em', justifyContent: 'center' }}>
              {ProjectData.map(project => {
                return <ProjectAlt key={project.id} project={project} />;
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
      <div>
        {ProjectView}

        <MediaQuery query="(min-width: 1025px)">
          <Footer
            toggleView={toggleData => {
              this.setState({
                toggleData: toggleData
              });
            }}
          />
        </MediaQuery>
      </div>
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
