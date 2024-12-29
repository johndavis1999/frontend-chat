import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';

function Tabs() {
  const location = useLocation();

  return (
    <div className="aside-body">
      <ul className="nav nav-tabs nav-fill mt-3" role="tablist">
        <li className="nav-item" role="presentation">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
              <i className="feather icon-message-square icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
              <p className="d-none d-sm-block">Chats</p>
            </div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link 
            to="/calls" 
            className={`nav-link ${location.pathname === '/calls' ? 'active' : ''}`}
          >
            <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
              <i className="feather icon-phone-call icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
              <p className="d-none d-sm-block">Calls</p>
            </div>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link 
            to="/contacts" 
            className={`nav-link ${location.pathname === '/contacts' ? 'active' : ''}`}
          >
            <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
              <i className="feather icon-users icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
              <p className="d-none d-sm-block">Contacts</p>
            </div>
          </Link>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Tabs;