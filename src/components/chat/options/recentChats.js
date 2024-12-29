import React, { useRef, useEffect } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

function RecentChats() {
    const chatsRef = useRef(null); 
    
    useEffect(() => {
        if (chatsRef.current) {
            // Inicializa PerfectScrollbar solo si el contenedor está disponible
            const sidebarBodyScroll = new PerfectScrollbar(chatsRef.current, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollX: true,
            });

            // Limpiar el efecto cuando el componente se desmonte
            return () => {
                sidebarBodyScroll.destroy();
            };
        }
    }, []);

    useEffect(() => {
      // Mostrar/ocultar 'chat-content' en pantallas pequeñas
      const chatListItem = document.querySelectorAll('.chat-list .chat-item');
      const chatContent = document.querySelector('.chat-content');
  
      const toggleChatContent = () => {
        if (chatContent) {
          chatContent.classList.toggle('show');
        }
      };
  
      chatListItem.forEach((item) => {
        item.addEventListener('click', toggleChatContent);
      });
  
      return () => {
        chatListItem.forEach((item) => {
          item.removeEventListener('click', toggleChatContent);
        });
      };
    }, []);

    return (
        <div className="tab-pane fade show active ps ps--active-y" aria-labelledby="chats-tab" ref={chatsRef}>
            <div>
                <p className="text-secondary mb-1">Recent chats</p>
                <ul className="list-unstyled chat-list px-1">
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status online"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body fw-bolder">John Doe</p>
                                    <p className="text-secondary fs-13px">Hi, How are you?</p>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">4:32 PM</p>
                                    <div className="badge rounded-pill bg-primary ms-auto">5</div>
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
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body fw-bolder">Carl Henson</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-image text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Photo</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">05:24 PM</p>
                                    <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face4.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status offline"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">John Doe</p>
                                    <p className="text-secondary fs-13px">Hi, How are you?</p>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">Yesterday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face5.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status online"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">Jensen Combs</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-video text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Video</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">2 days ago</p>
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
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body fw-bolder">Carl Henson</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-image text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Photo</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">05:24 PM</p>
                                    <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face4.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status offline"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">John Doe</p>
                                    <p className="text-secondary fs-13px">Hi, How are you?</p>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">Yesterday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face5.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status online"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">Jensen Combs</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-video text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Video</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">2 days ago</p>
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
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body fw-bolder">Carl Henson</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-image text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Photo</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">05:24 PM</p>
                                    <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face4.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status offline"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">John Doe</p>
                                    <p className="text-secondary fs-13px">Hi, How are you?</p>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">Yesterday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face5.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status online"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">Jensen Combs</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-video text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Video</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">2 days ago</p>
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
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body fw-bolder">Carl Henson</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-image text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Photo</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">05:24 PM</p>
                                    <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face4.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status offline"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">John Doe</p>
                                    <p className="text-secondary fs-13px">Hi, How are you?</p>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">Yesterday</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="chat-item pe-1">
                        <a href="#" className="d-flex align-items-center">
                            <figure className="mb-0 me-2">
                                <img src="./assets/img/face5.jpg" className="img-xs rounded-circle" alt="user"/>
                                <div className="status online"></div>
                            </figure>
                            <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                <div>
                                    <p className="text-body">Jensen Combs</p>
                                    <div className="d-flex align-items-center">
                                        <i className="feather icon-video text-secondary icon-md mb-2px"></i>
                                        <p className="text-secondary ms-1">Video</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-end">
                                    <p className="text-secondary fs-13px mb-1">2 days ago</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RecentChats;
