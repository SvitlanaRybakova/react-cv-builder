import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { TASKS, TECHNOLOGIES, LINK } from '../constants';

const Project = ({ project }) => {
  return (
    <div className='project-item'>
      <div className='project-title'>
        <FaReact />
        <span className='project-name'>{project.name}</span>
      </div>

      <div>{project.description}</div>
      <div className='project-section-title'>{TASKS}</div>
      <ul>
        {project.tasks_accomplishments &&
          project.tasks_accomplishments.map((task) => (
            <li key={task}>{task}</li>
          ))}
      </ul>
      <div className='project-section-title'>{TECHNOLOGIES}</div>
      <div>
        {project.technologies &&
          project.technologies.map((tech) => (
            <p className='technology' key={tech}>
              {tech}
            </p>
          ))}
      </div>
      {project.link && (
        <>
          <div className='project-section-title'>
            <Link to={project.link}>{LINK}</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
