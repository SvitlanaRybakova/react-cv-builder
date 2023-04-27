import './App.css';
import {
  EXPERIENCES,
  INTERNSHIP,
  EDUCATION,
  CONTACT,
  SKILLS,
} from './constants';
import {
  NAME,
  JOB_POSITION,
  INTRODUCTION,
  EXPERINCES_COLLECTION,
  INTERNSHIPS_COLLECTION,
  EDUCATIONS_COLLECTION,
  CONTACT_COLLECTION,
  SKILLS_COLLECTION,
} from './data/data';

import Block from './components/Block';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <section id='main'>
        <header id='title'>
          <h1>{NAME}</h1>
          <span className='subtitle'>{JOB_POSITION}</span>
        </header>
        {/* summary */}
        <div
        className='introduction'
          dangerouslySetInnerHTML={{
            __html: INTRODUCTION,
          }}
        />

        <Block data={EXPERINCES_COLLECTION} title={EXPERIENCES} />
        <Block data={INTERNSHIPS_COLLECTION} title={INTERNSHIP} />
        <Block data={EDUCATIONS_COLLECTION} title={EDUCATION} />
      </section>
      <aside id='sidebar'>
        <Sidebar title={CONTACT} data={CONTACT_COLLECTION} />
        <Sidebar title={SKILLS} data={SKILLS_COLLECTION} />
      </aside>
    </div>
  );
}

export default App;
