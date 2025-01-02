import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useGlobalContext } from '../context/GlobalVariables';

const UserStatus = ({ userId }) => {
    const { websocketUrl } = useGlobalContext();
    const [isOnline, setIsOnline] = useState(false);
    const id = userId.toString();
    useEffect(() => {
        const socket = io(websocketUrl, { transports: ['websocket'] });
        const handleUserStatus = (data) => {
            if (data.channel === id) {
                setIsOnline(data.isActive);
            }
        };
        const interval = setInterval(() => {
            socket.emit('checkChannelStatus', { channel: id });
        }, 1000);
        socket.on('channelStatus', handleUserStatus);
        return () => {
            clearInterval(interval);
            socket.off('channelStatus', handleUserStatus);
            socket.disconnect();
        };
    }, [id, websocketUrl]);
    return isOnline ? 'online' : 'offline';
};
export default UserStatus;
