import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalVariables';
import UserStatus from '../../socket/UserStatus';

const ContactItem = ({ contact }) => {
  const status = UserStatus({ userId: contact.id_contact.id });

  return (
    <li className="chat-item pe-1">
      <Link to={`/chat/${contact.id_contact.id}`} className="d-flex align-items-center">
        <figure className="mb-0 me-2">
          <Avatar
            name={contact.id_contact.username}
            size="35"
            round={true}
            textSizeRatio={2}
          />
          {/* Mostrar el estado en línea o desconectado */}
          <div className={`status ${status}`}></div>
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
      </Link>
    </li>
  );
};

export default ContactItem;
