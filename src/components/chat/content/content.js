import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Body from './body';

function Content() {
    const { id } = useParams();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const chatContent = document.querySelector('.chat-content');

        // Cuando cambia el id, mostrar el contenido automáticamente
        if (chatContent) {
            setIsVisible(true);
            chatContent.classList.add('show');
        }

        return () => {
            if (chatContent) {
                setIsVisible(false);
                chatContent.classList.remove('show');
            }
        };
    }, [id]);

    return (
        <div className={`chat-content ${isVisible ? 'show' : ''}`}>
            <div className="chat-header border-bottom pb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link to={'/'}>
                            <i className="feather icon-x icon-lg me-2 ms-n2 text-danger"></i>
                        </Link>
                        <figure className="mb-0 me-2">
                            <img src="./assets/img/face2.jpg" className="img-sm rounded-circle" alt="image" />
                            <div className="status online"></div>
                            <div className="status online"></div>
                        </figure>
                        <div>
                            <p>Mariana Zenha {id}</p>
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