import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ title, data }) => {
  return (
    <div className='side-block'>
      <h1>{title}</h1>
      <ul>
        {data &&
          data.map((item) =>
            item.src ? (
              <li className='contact-links'>
                <span>{item.icon}</span>{' '}
                <Link target='_blank' to={item.src}>
                  {item.name}
                </Link>
              </li>
            ) : (
              <p className='side-bar-item'>{item}</p>
            )
          )}
      </ul>
    </div>
  );
};

export default Sidebar;
