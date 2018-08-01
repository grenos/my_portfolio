import React from 'react';
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
  ${media.plusPhone`margin-top: 750px;`};
  ${media.iphoneX8`margin-top: 850px;`};
  ${media.iphoneSE`margin-top: 550px;`};
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
      toggleData: null,
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
    if (this.state.width < 993) {
      this.setState({ toggleData: true });
    } else {
      this.setState({ toggleData: false });
    }
  };

  render() {
    //
    let ProjectView;
    //
    if (!this.state.toggleData) {
      ProjectView = (
        <div>
          <MediaQuery query="(min-device-width: 1025px)">
            <Linker />
          </MediaQuery>
          {ProjectData.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      );
    } else {
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
    }
    //
    return (
      <div>
        {ProjectView}

        <MediaQuery query="(min-device-width: 993px)">
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

export default App;
