import React from 'react';
import { ProjectData } from '../ProjectData';

import Linker from '../Linker/Linker';
import Project from '../projects/Project';
import ProjectAlt from '../projects/ProjectAlt';
import Footer from '../footer/Footer';

import { Container, Row } from 'reactstrap';

let flexStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleData: null
    };
  }

  render() {
    //
    let ProjectView;
    //
    if (!this.state.toggleData) {
      ProjectView = (
        <div>
          <Linker />
          {ProjectData.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      );
    } else {
      ProjectView = (
        <Container style={flexStyle}>
          <Row style={{ paddingTop: '3em' }}>
            {ProjectData.map(project => {
              return <ProjectAlt key={project.id} project={project} />;
            })}
          </Row>
        </Container>
      );
    }

    return (
      <div>
        {ProjectView}
        <Footer
          toggleView={toggleData => {
            this.setState({
              toggleData: toggleData
            });
          }}
        />
      </div>
    );
  }
}

export default App;
