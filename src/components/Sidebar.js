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
              <Link
                className='contact-links'
                target='_blank'
                to={item.src}
                key={item.src}
              >
                  <span>{item.icon}</span> {item.name}
              </Link>
            ) : (
              <p className='side-bar-item' key={item}>
                {item}
              </p>
            )
          )}
      </ul>
    </div>
  );
};

export default Sidebar;
