import './App.css';
import { Route, Routes } from 'react-router-dom';

import CV from './pages/CV'
import CoverLetter from './pages/CoverLetter'

function App() {
  return (
      <Routes>
          <Route path='/' element={<CV />} />
          <Route path='/cover-letter' element={<CoverLetter />} />
        </Routes>
    
  )
}

export default App;
