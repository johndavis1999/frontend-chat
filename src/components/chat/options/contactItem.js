import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

const ContactItem = ({ contact }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Asegurándonos de que el contactId sea un string
  const contactId = contact.id_contact.id.toString(); // Convertir el ID del contacto a string

  useEffect(() => {
    // Crear una nueva conexión WebSocket solo para verificar el estado
    const newSocket = io('http://localhost:3010', {
      transports: ['websocket'],
    });

    setSocket(newSocket);

    // Función para manejar la conexión inicial
    const handleConnect = () => {
      console.log('Conectado al servidor');
      setIsConnected(true);

      // Iniciar el ping periódico para verificar el estado
      const interval = setInterval(() => {
        newSocket.emit('checkChannelStatus', { channel: contactId }); // Verificar estado cada 1 segundo
      }, 1000);

      newSocket.on('disconnect', () => clearInterval(interval));
    };

    // Función para manejar el estado del contacto
    const handleUserStatus = (data) => {
      if (data.channel === contactId) {
        setIsOnline(data.isActive); // Actualizar el estado de conexión
      }
    };

    newSocket.on('connect', handleConnect);
    newSocket.on('channelStatus', handleUserStatus); // Escuchar el estado del canal

    // Limpiar la conexión y los listeners cuando el componente se desmonte
    return () => {
      newSocket.off('connect', handleConnect);
      newSocket.off('channelStatus', handleUserStatus);
      newSocket.disconnect();
    };
  }, [contactId]);

  return (
    <li className="chat-item pe-1">
      <Link to={`/chat/${contact.id}`} className="d-flex align-items-center">
        <figure className="mb-0 me-2">
          <Avatar
            name={contact.id_contact.username}
            size="35"
            round={true}
            textSizeRatio={2}
          />
          {/* Mostrar el estado en línea o desconectado */}
          <div className={`status ${isOnline ? 'online' : 'offline'}`}></div>
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
