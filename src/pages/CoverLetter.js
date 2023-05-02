import React from 'react';
import {
  JOB_POSITION,
  NAME,
  COVER_LETTER_CONTENT,
  CONTACT_COLLECTION,
  SKILLS_COLLECTION,
} from '../data/data';
import { CONTACT, SKILLS } from '../constants';
import Sidebar from '../components/Sidebar';

const CoverLetter = () => {
  return (
    <div className='App'>
      <section id='main'>
        <header id='title'>
          <h1>{NAME}</h1>
          <span className='subtitle'>{JOB_POSITION}</span>
        </header>
        <div className="cover-letter-title">Cover Letter</div>
        {/* summary */}
        <div
          className='introduction'
          dangerouslySetInnerHTML={{
            __html: COVER_LETTER_CONTENT,
          }}
        />
      </section>
      <aside id='sidebar'>
        <Sidebar title={CONTACT} data={CONTACT_COLLECTION} />
      </aside>
    </div>
  );
};

export default CoverLetter;
