import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalVariables';
import io from 'socket.io-client';

const WebSocketConnection = () => {
  const { userId, websocketUrl } = useGlobalContext(); // Obtener el userId del contexto global
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (userId) {
      // Crear una conexión WebSocket al servidor
      const newSocket = io(websocketUrl, {
        transports: ['websocket'],
      });

      setSocket(newSocket);

      const handleConnect = () => {
        console.log('Conectado al servidor');
        newSocket.emit('joinChannel', { channel: userId }); // Unirse al canal del usuario
        setIsConnected(true);
      };

      const handleDisconnect = () => {
        console.log('Desconectado del servidor');
        setIsConnected(false);
      };

      newSocket.on('connect', handleConnect);
      newSocket.on('disconnect', handleDisconnect);

      return () => {
        // Limpiar listeners antes de desconectar
        newSocket.off('connect', handleConnect);
        newSocket.off('disconnect', handleDisconnect);
        newSocket.disconnect();
      };
    }
  }, [userId]);

  return null; // Este componente no necesita renderizar nada
};

export default WebSocketConnection;
