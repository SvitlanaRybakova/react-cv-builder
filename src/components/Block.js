import React from 'react';
import Experience from './Experience';

const Block = ({ data, title }) => {

  return (
    <section class='main-block'>
      <h2>
        <i class='fa fa-suitcase'></i> {title}
      </h2>
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
