import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Body from './body';
import Header from './header';

function Content() {
    const { id } = useParams();
    const chatContentRef = useRef(null);

    useEffect(() => {
        const chatContent = chatContentRef.current;
        if (chatContent) {
            chatContent.classList.toggle('show', !!id);
        }
    }, [id]);

    return (
        <div ref={chatContentRef} className="chat-content">
            <Header userId={id} />
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