import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import './index.css';

const Login = lazy(() => import('./views/login/login'));
const Analytics = lazy(() => import('./views/analytics/analytics'));
const Supervisor = lazy(() => import('./views/supervisor/supervisor'));
const Feeding = lazy(() => import('./views/feeding/feeding'));
const Operator = lazy(() => import('./views/operator/operator'));
const Winder = lazy(() => import('./views/winder/winder'));
const DeleteBag = lazy(() => import('./views/feeding/deleteBag'));
const CreateBag = lazy(() => import('./views/feeding/createBag'));
const EditBag = lazy(() => import('./views/feeding/editBag'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/analytics" element={<Analytics />} />
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
        </Suspense>
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
