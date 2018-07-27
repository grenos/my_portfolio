import React from 'react';
import { ProjectData } from '../ProjectData';

import Navbar from '../navbar/Navbar';
import Project from '../projects/Project';
import Footer from '../footer/Footer';

export default () => {
  return (
    <div>
      <Navbar />
      {ProjectData.map(project => {
        return <Project key={project.id} project={project} />;
      })}

      <Footer />
    </div>
  );
};
