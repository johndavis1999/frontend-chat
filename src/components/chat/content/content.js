import React, { useEffect } from 'react';
import Body from './body';

function Content() {

    useEffect(() => {
        // Obtener el botón para volver a la lista de chats
        const backToChatListButton = document.querySelector('#backToChatList');
        const chatContent = document.querySelector('.chat-content');

        // Añadir el evento de clic al botón
        const handleBackToChatListClick = () => {
        if (chatContent) {
            chatContent.classList.toggle('show');
        }
        };

        backToChatListButton.addEventListener('click', handleBackToChatListClick);

        // Limpiar el evento cuando el componente se desmonte
        return () => {
        backToChatListButton.removeEventListener('click', handleBackToChatListClick);
        };
    }, []);

    return (
        <div className="col-lg-8 chat-content">
            <div className="chat-header border-bottom pb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <a type="button" id="backToChatList">
                            <i className="feather icon-corner-up-left icon-lg me-2 ms-n2 text-secondary d-lg-none"></i>
                        </a>
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face2.jpg" className="img-sm rounded-circle" alt="image" />
                            <div className="status online"></div>
                            <div className="status online"></div>
                        </figure>
                        <div>
                            <p>Mariana Zenha</p>
                            <p className="text-secondary fs-13px">Front-end Developer</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center me-n1">
                        {/*
                        <a className="me-3" type="button" data-bs-toggle="tooltip" data-bs-title="Start video call">
                            <i className="feather icon-video icon-lg text-secondary"></i>
                        </a>
                        <a className="me-0 me-sm-3" data-bs-toggle="tooltip" data-bs-title="Start voice call" type="button">
                            <i className="feather icon-phone-call icon-lg text-secondary"></i>
                        </a>
                        */}
                        <a type="button" className="d-none d-sm-block" data-bs-toggle="tooltip" data-bs-title="Add to contacts">
                            <i className="feather icon-user-plus icon-lg text-secondary"></i>
                        </a>
                    </div>
                </div>
            </div>
            <Body/>
            <div className="chat-footer d-flex">
                {/*
                <div>
                    <button type="button" className="btn border btn-icon rounded-circle me-2" data-bs-toggle="tooltip" data-bs-title="Emoji">
                        <i className="feather icon-smile text-secondary"></i>
                    </button>
                </div>
                <div className="d-none d-md-block">
                    <button type="button" className="btn border btn-icon rounded-circle me-2" data-bs-toggle="tooltip" data-bs-title="Attatch files">
                        <i className="feather icon-paperclip text-secondary"></i>
                    </button>
                </div>
                <div className="d-none d-md-block">
                    <button type="button" className="btn border btn-icon rounded-circle me-2" data-bs-toggle="tooltip" data-bs-title="Record you voice" disabled>
                        <i className="feather icon-mic text-secondary"></i>
                    </button>
                </div>
                */}
                <form className="search-form flex-grow-1 me-2">
                    <div className="input-group">
                        <input type="text" className="form-control rounded-pill" id="chatForm" placeholder="Type a message" />
                    </div>
                </form>
                <div>
                    <button type="button" className="btn btn-primary btn-icon rounded-circle">
                        <i className="feather icon-send"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Content;