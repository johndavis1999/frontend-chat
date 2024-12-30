import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { io } from 'socket.io-client';

const ContactItem = ({ contact }) => {
  const [userStatus, setUserStatus] = useState('offline');
  const socket = React.useRef(null);

  useEffect(() => {
    // Conectar al canal único del contacto
    const channel = `contact-${contact.id_contact.id}`;
    socket.current = io('ws://localhost:3010', {
      transports: ['websocket'],
      query: { channel }, // Conecta al canal específico
    });

    // Escuchar el estado del usuario
    socket.current.on('user-status', (data) => {
      if (data.userId === contact.id_contact.id) {
        setUserStatus(data.status); // Actualiza el estado según el evento recibido
      }
    });

    // Emitir un evento para consultar el estado del usuario
    socket.current.emit('check-user-status', { userId: contact.id_contact.id });

    return () => {
      // Desconectar del canal al desmontar el componente
      if (socket.current) {
        socket.current.disconnect();
        socket.current = null;
      }
    };
  }, [contact.id_contact.id]);

  return (
    <li className="chat-item pe-1">
      <a href="#" className="d-flex align-items-center">
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