import React, { useRef, useEffect } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

function RecentCalls() {
    const callsRef = useRef(null);

    useEffect(() => {
        if (callsRef.current) {
            // Aplicando PerfectScrollbar con solo desplazamiento vertical
            const sidebarBodyScroll = new PerfectScrollbar(callsRef.current, {
                wheelSpeed: 2,  // Controla la velocidad del desplazamiento con el mouse
                wheelPropagation: true, // Permite que el scroll se propague
                minScrollbarLength: 20, // Longitud mínima de la barra de desplazamiento
                suppressScrollX: true, // Deshabilita el scroll horizontal
            });
            
            // Limpiar el efecto cuando el componente se desmonte
            return () => {
                sidebarBodyScroll.destroy();
            };
        }
    }, []);

    console.log("llamadas");

    return (
        <div className="tab-pane fade show active ps ps--active-y" aria-labelledby="chats-tab"ref={callsRef}>
            <p className="text-secondary mb-1">Recent calls</p>
            <ul className="list-unstyled chat-list px-1">
                <li className="chat-item pe-1">
                    <a href="#" className="d-flex align-items-center">
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face4.jpg" className="img-xs rounded-circle" alt="user"/>
                            <div className="status online"></div>
                        </figure>
                        <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                            <div>
                                <p className="text-body">Jensen Combs</p>
                                <div className="d-flex align-items-center">
                                    <i className="feather icon-arrow-up-right icon-sm text-success me-1"></i>
                                    <p className="text-secondary fs-13px">Today, 03:11 AM</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <i className="feather icon-phone-call text-primary icon-md"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="chat-item pe-1">
                    <a href="#" className="d-flex align-items-center">
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face5.jpg" className="img-xs rounded-circle" alt="user"/>
                            <div className="status offline"></div>
                        </figure>
                        <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                            <div>
                                <p className="text-body">Leonardo Payne</p>
                                <div className="d-flex align-items-center">
                                    <i className="feather icon-arrow-down-left icon-sm text-danger me-1"></i>
                                    <p className="text-secondary fs-13px">Today, 11:41 AM</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <i className="feather icon-video text-primary icon-md"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="chat-item pe-1">
                    <a href="#" className="d-flex align-items-center">
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face6.jpg" className="img-xs rounded-circle" alt="user"/>
                            <div className="status offline"></div>
                        </figure>
                        <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                            <div>
                                <p className="text-body">Carl Henson</p>
                                <div className="d-flex align-items-center">
                                    <i className="feather icon-arrow-down-left icon-sm text-danger me-1"></i>
                                    <p className="text-secondary fs-13px">Today, 04:24 PM</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <i className="feather icon-phone-call text-primary icon-md"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="chat-item pe-1">
                    <a href="#" className="d-flex align-items-center">
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face7.jpg" className="img-xs rounded-circle" alt="user"/>
                            <div className="status online"></div>
                        </figure>
                        <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                            <div>
                                <p className="text-body">Jensen Combs</p>
                                <div className="d-flex align-items-center">
                                    <i className="feather icon-arrow-down-left icon-sm text-danger me-1"></i>
                                    <p className="text-secondary fs-13px">Today, 12:53 AM</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                            <i className="feather icon-phone-call text-primary icon-md"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="chat-item pe-1">
                    <a href="#" className="d-flex align-items-center">
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="user"/>
                            <div className="status online"></div>
                        </figure>
                        <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                            <div>
                                <p className="text-body">John Doe</p>
                                <div className="d-flex align-items-center">
                                    <i className="feather icon-arrow-down-left icon-sm text-danger me-1"></i>
                                    <p className="text-secondary fs-13px">Today, 01:42 AM</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <i className="feather icon-phone-call text-primary icon-md"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="chat-item pe-1">
                    <a href="#" className="d-flex align-items-center">
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face3.jpg" className="img-xs rounded-circle" alt="user"/>
                            <div className="status offline"></div>
                        </figure>
                        <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                            <div>
                                <p className="text-body">John Doe</p>
                                <div className="d-flex align-items-center">
                                    <i className="feather icon-arrow-up-right icon-sm text-success me-1"></i>
                                    <p className="text-secondary fs-13px">Today, 12:01 AM</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <i className="feather icon-phone-call text-primary icon-md"></i>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default RecentCalls;