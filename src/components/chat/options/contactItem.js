// frontend-chat/src/components/ContactItem.js
import React, { useState } from 'react';
import Avatar from 'react-avatar';

const ContactItem = ({ contact }) => {
  const [userStatus, setUserStatus] = useState('offline');

  return (
    <li className="chat-item pe-1" key={contact.id_contact.id}>
      <a href="javascript:void(0)" className="d-flex align-items-center">
        <figure className="mb-0 me-2">
          <Avatar
            name={contact.id_contact.username}
            size="40"
            round={true}
            textSizeRatio={2}
          />
          <div className={`status ${userStatus === 'online' ? 'online' : 'offline'}`}></div>
        </figure>
        <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
          <div>
            <p className="text-body">{contact.id_contact.username}</p>
            <div className="d-flex align-items-center">
              <p className="text-secondary fs-13px">Note:</p>
            </div>
          </div>
          <div className="d-flex align-items-end text-body">
            <i className="feather icon-message-square text-primary icon-md me-2"></i>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ContactItem;
