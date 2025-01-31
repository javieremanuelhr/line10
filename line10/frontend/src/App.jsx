import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import './index.css';
import Analytics from './views/analytics/analytics';
import Supervisor from './views/supervisor/supervisor';
import Feeding from './views/feeding/feeding';
import Operator from './views/operator/operator';
import Winder from './views/winder/winder';
import DeleteBag from './views/feeding/deleteBag';
import Topbar from './components/topbar';
import CreateBag from './views/feeding/createBag';
import EditBag from './views/feeding/editBag';

function App() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Mobile Topbar */}
      <div className="block sm:hidden">
        <Topbar />
      </div>

      {/* Fixed Sidebar (Always Visible) */}
      <div className="hidden sm:block fixed left-0 top-0 h-screen w-64 bg-[#0f1214]">
        <Sidebar />
      </div>

      {/* Main Content Area (Add left margin to prevent overlap) */}
      <div className="flex flex-col w-screen sm:ml-64">
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/operator" element={<Operator />} />
          <Route path="/feeding" element={<Feeding />} />
          <Route path="/winder" element={<Winder />} />
          <Route path="/inventory" element={<h1></h1>} />
          <Route path="/quality" element={<h1></h1>} />
          <Route path="/feeding/delete/:id" element={<DeleteBag />} />
          <Route path="/feeding/create" element={<CreateBag />} />
          <Route path="/feeding/edit/:id" element={<EditBag />} />
        </Routes>
      </div>
    </div>
  );
}


export default App
