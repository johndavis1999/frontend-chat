import React, { useState } from 'react';
import RecentChats from './recentChats';
import Contacts from './contacts';
import RecentCalls from './recenCalls';

function Tabs() {
  const [activeTab, setActiveTab] = useState('chats');  // Estado para manejar la tab activa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="aside-body">
      <ul className="nav nav-tabs nav-fill mt-3" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            href="#"
            onClick={() => handleTabClick('chats')}
            className={`nav-link ${activeTab === 'chats' ? 'active' : ''}`}
          >
            <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
              <i className="feather icon-message-square icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
              <p className="d-none d-sm-block">Chats</p>
            </div>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#"
            onClick={() => handleTabClick('calls')}
            className={`nav-link ${activeTab === 'calls' ? 'active' : ''}`}
          >
            <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
              <i className="feather icon-phone-call icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
              <p className="d-none d-sm-block">Calls</p>
            </div>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#"
            onClick={() => handleTabClick('contacts')}
            className={`nav-link ${activeTab === 'contacts' ? 'active' : ''}`}
          >
            <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
              <i className="feather icon-users icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
              <p className="d-none d-sm-block">Contacts</p>
            </div>
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 'chats' && (
          <RecentChats/>
        )}
        {activeTab === 'calls' && (
          <RecentCalls/>
        )}
        {activeTab === 'contacts' && (
          <Contacts/>
        )}
      </div>
    </div>
  );
}

export default Tabs;
