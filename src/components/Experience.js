import React from 'react';
import { ImLocation } from 'react-icons/im';

import Project from './Project';


const Experience = ({ data }) => {
  return (
    <section class='blocks'>
      <div class='date'>
        <span>{data.start_date}</span>
        <span>{data.end_date}</span>
      </div>
      <div class='decorator'></div>
      <div class='details'>
        <header>
          <h3 class='place'>{data.company_name}</h3>
          <span class='location'>
            <ImLocation />
            {data.workplace}
          </span>
          {data.education && <div class='place'>{data.education}</div>}
        </header>
        <p className='project-header'>Projects:</p>
        <div>
          {data.projects &&
            data.projects.map((project) => (
              <Project project={project} key={project.name} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
