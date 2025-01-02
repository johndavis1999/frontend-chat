import React from 'react';
import { Outlet } from 'react-router-dom';
import WebSocketComponent from '../socket/WebSocket';
import Tabs from './options/tabs';
import Header from './header';

function Index() {
  return (
    <>
    <WebSocketComponent />
    <div className="main-wrapper">
      <div className="page-wrapper full-page">
        <div className="page-content">
          <div className="row chat-wrapper">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row position-relative">
                    <div className="col-lg-4 chat-aside border-end-lg">
                      <div className="aside-content">
                        <Header/>
                        <Tabs/>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Index;