import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import './index.css';
import Analytics from './views/analytics/analytics';
import Supervisor from './views/supervisor/supervisor';

function App() {

  return (
    <Router>
    <div className='flex flex-row'>
      <Sidebar />
      <div className='w-screen'>
        <Routes>
          <Route path='/' element={<Analytics />} />
          <Route path='/supervisor' element={<Supervisor />} />
          <Route path='/operator' element={<h1></h1>} />
          <Route path='/feeding' element={<h1></h1>} />
          <Route path='/winder' element={<h1></h1>} />
          <Route path='/inventory' element={<h1></h1>} />
          <Route path='/quality' element={<h1></h1>} />
        </Routes>
      </div>

    </div>
    </Router>

  )
}

export default App
