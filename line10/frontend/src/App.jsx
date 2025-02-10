import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import './index.css';
import Login from './views/login/login';
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
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Fixed Sidebar (Desktop Only) */}
      {!isLoginPage && (
        <div className="hidden sm:block fixed left-0 top-0 h-screen w-64 bg-[#0f1214]">
          <Sidebar />
        </div>
      )}

      {/* Scrollable Content Area (Prevents Scrolling Navbar & Topbar) */}
      <div className={`flex flex-col w-screen ${!isLoginPage ? 'sm:ml-64' : ''} h-full overflow-y-auto pb-16`}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Analytics />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/operator" element={<Operator />} />
          <Route path="/feeding" element={<Feeding />} />
          <Route path="/winder" element={<Winder />} />
          <Route path="/inventory" element={<h1>Inventory</h1>} />
          <Route path="/quality" element={<h1>Quality</h1>} />
          <Route path="/feeding/delete/:id" element={<DeleteBag />} />
          <Route path="/feeding/create" element={<CreateBag />} />
          <Route path="/feeding/edit/:id" element={<EditBag />} />
        </Routes>
      </div>

      {/* Mobile Navbar (Fixed on Screen) */}
      {!isLoginPage && (
        <div className="block sm:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0f1214]">
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default App;
