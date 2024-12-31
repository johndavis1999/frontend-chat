import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import WebSocketComponent from '../socket/WebSocket';
import Tabs from './options/tabs';
import Content from './content/content';
import { useGlobalContext } from '../context/GlobalVariables';

function Chat() {
  const { username } = useGlobalContext();
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
                        <div className="aside-header">
                          <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                            <div className="d-flex align-items-center">
                              <figure className="me-2 mb-0">
                                <img src="./assets/img/face1.jpg" className="img-sm rounded-circle" alt="profile"/>
                                <div className="status online"></div>
                              </figure>
                              <div>
                                <h6>{username}</h6>
                                <p className="text-secondary fs-13px">Estado descripción</p>
                              </div>
                            </div>
                            <div className="theme-switcher-wrapper nav-item">
                              <input type="checkbox" value="" id="theme-switcher"/>
                              <label htmlFor="theme-switcher">
                                <div className="box light">
                                  <div className="ball"></div>
                                  <div className="icons">
                                    <i className="feather icon-sun"></i>
                                    <i className="feather icon-moon"></i>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="dropdown">
                              <a type="button" id="memu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="feather icon-settings icon-lg text-secondary pb-3px"></i>
                              </a>
                              <div className="dropdown-menu" aria-labelledby="memu">
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                  <i className="feather icon-eye icon-sm me-2"></i>
                                  <span className="">Ver Perfil</span>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                  <i className="feather icon-edit icon-sm me-2"></i>
                                  <span className="">Editar Perfil</span>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                  <i className="feather icon-aperture icon-sm me-2"></i>
                                  <span className="">Añadir estado</span>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                  <i className="feather icon-settings icon-sm me-2"></i>
                                  <span className="">Configuración</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <form className="search-form">
                            <div className="input-group">
                              <input type="text" className="form-control" id="searchForm" placeholder="Buscar..."/>
                              <span className="input-group-text bg-transparent">
                                <i className="feather icon-search"></i>
                              </span>
                            </div>
                          </form>
                        </div>
                        <Tabs/>
                      </div>
                    </div>
                    {/*<Content/>*/}
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

export default Chat;