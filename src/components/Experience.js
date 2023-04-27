import React from 'react';
import { ImLocation } from 'react-icons/im';

import Project from './Project';


const Experience = ({ data }) => {
  return (
    <section className='blocks'>
      <div className='date'>
        <span>{data.start_date}</span>
        <span>{data.end_date}</span>
      </div>
      <div className='decorator'></div>
      <div className='details'>
        <header>
          <h3 className='place'>{data.company_name}</h3>
          <span className='location'>
            <ImLocation />
            {data.workplace}
          </span>
          {data.education && <div className='education'>{data.education}</div>}
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
