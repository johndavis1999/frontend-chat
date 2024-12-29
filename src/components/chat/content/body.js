import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

function Body() {
    const chatBodyRef = useRef(null);

    useEffect(() => {
        // Asegúrate de que el ref esté disponible antes de aplicar PerfectScrollbar
        if (chatBodyRef.current) {
            const sidebarBodyScroll = new PerfectScrollbar(chatBodyRef.current, {
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

    return (
        <div id="chat-body" className="chat-body ps ps--active-y" ref={chatBodyRef}>
            <ul className="messages">
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:15 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                            <span>8:15 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:17 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:18 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item friend">
                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:22 PM</span>
                        </div>
                    </div>
                </li>
                <li className="message-item me">
                    <img src="./assets/img/face1.jpg" className="img-xs rounded-circle" alt="avatar" />
                    <div className="content">
                        <div className="message">
                            <div className="bubble">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.</p>
                            </div>
                            <span>8:30 PM</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Body;