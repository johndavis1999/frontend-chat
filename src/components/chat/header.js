import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalVariables';
import Avatar from 'react-avatar';

function Header() {
  const { username } = useGlobalContext();
  return (
    <>
        <div className="aside-header">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                <div className="d-flex align-items-center">
                    <figure className="me-2 mb-0">
                        <Avatar
                            name={username}
                            size="35"
                            round={true}
                            textSizeRatio={2}
                        />
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
    </>
  );
}

export default Header;