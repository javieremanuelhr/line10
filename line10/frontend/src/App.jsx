import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import './index.css';
import Analytics from './views/analytics/analytics';
import Supervisor from './views/supervisor/supervisor';
import Feeding from './views/feeding/feeding';
import Operator from './views/operator/operator';
import Winder from './views/winder/winder';

function App() {

  return (
    
    <div className='flex flex-row h-screen'>
      <Sidebar />
      <div className='w-screen'>
        <Routes>
          <Route path='/' element={<Analytics />} />
          <Route path='/supervisor' element={<Supervisor />} />
          <Route path='/operator' element={<Operator />} />
          <Route path='/feeding' element={<Feeding />} />
          <Route path='/winder' element={<Winder />} />
          <Route path='/inventory' element={<h1></h1>} />
          <Route path='/quality' element={<h1></h1>} />
        </Routes>
      </div>

    </div>
    

  )
}

export default App
