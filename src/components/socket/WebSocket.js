import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalVariables';
import io from 'socket.io-client';

const WebSocketConnection = () => {
  const { userId } = useGlobalContext();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Si userId está disponible y no existe una conexión aún, crear una nueva
    if (userId) {
      // Solo crear la conexión si no existe una conexión activa
      if (!socket) {
        const socketInstance = io('ws://localhost:3010', {
          transports: ['websocket'],
          autoConnect: true,
          query: { channel: userId }, // Pasar el userId como channel
        });

        socketInstance.on('connect', () => {
          console.log(`Cliente conectado al canal: ${userId} - Socket ID: ${socketInstance.id}`);
        });

        socketInstance.on('disconnect', () => {
          console.log(`Cliente desconectado del canal: ${userId} - Socket ID: ${socketInstance.id}`);
        });

        // Escuchar el evento 'isAvailable' y responder con 'keepAlive'
        socketInstance.on('isAvailable', () => {
          console.log('Recibido "isAvailable" (ping) del servidor');
          socketInstance.emit('keepAlive', userId);
          console.log('Enviando "keepAlive" (pong) al servidor');
        });

        // Escuchar el evento "keepAlive" para confirmar que el cliente sigue activo
        socketInstance.on('keepAlive', () => {
          console.log('Recibido "keepAlive" del servidor');
        });

        // Escuchar el evento de conexión del canal
        socketInstance.on('connectionStatus', (data) => {
          const { channel, status, socketId } = data;
          console.log(`Estado de la conexión: Canal=${channel}, Estado=${status}, SocketID=${socketId}`);
        });

        setSocket(socketInstance); // Guardar la instancia del socket
      }
    }

    // Si el userId cambia o el componente se desmonta, desconectar el socket
    return () => {
      if (socket) {
        socket.disconnect();
        console.log('WebSocket desconectado');
      }
    };
  }, [userId]); // Solo reaccionar a cambios en userId

  // Si el userId no está disponible, no renderizamos nada
  if (!userId) return null;

  return null; // Este componente no renderiza nada directamente
};

export default WebSocketConnection;
