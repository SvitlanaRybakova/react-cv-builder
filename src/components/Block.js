import React from 'react';
import Experience from './Experience';

const Block = ({ data, title }) => {
  return (
    <section className='main-block'>
      <h2>{title}</h2>
      {data &&
        data.map((work_experience) => (
          <Experience
            data={work_experience}
            key={work_experience.company_name}
          />
        ))}
    </section>
  );
};

export default Block;
