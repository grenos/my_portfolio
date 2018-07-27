import React from 'react';
import { ProjectData } from '../ProjectData';

import Linker from '../Linker/Linker';
import Project from '../projects/Project';
import Footer from '../footer/Footer';

export default () => {
  return (
    <div>
      <Linker />

      {ProjectData.map(project => {
        return <Project key={project.id} project={project} />;
      })}

      <Footer />
    </div>
  );
};
