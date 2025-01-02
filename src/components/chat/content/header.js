import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalVariables';
import { Link, useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import UserStatus from '../../socket/UserStatus';

function Header({ userId }) {
    const { apiUrl, authToken } = useGlobalContext();
    const [user, setUser] = useState(null);
    const status = UserStatus({ userId: userId });
  
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${apiUrl}/users/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Datos del usuario:', data); // Aquí puedes inspeccionar los datos obtenidos
                    setUser(data); // Actualizas el estado con los datos obtenidos
                } else {
                    console.error('Error al obtener el usuario:', response.status);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [apiUrl, authToken, userId]);

    if (!user) {
        return 
            <div className="chat-header border-bottom pb-2">
                Cargando...
            </div>;
      }

    return (
        <>
            <div className="chat-header border-bottom pb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link to={'/'}>
                            <i className="feather icon-x icon-lg me-2 ms-n2 text-danger"></i>
                        </Link>
                        <figure className="mb-0 me-2">
                            <Avatar
                                name={user.username}
                                size="35"
                                round={true}
                                textSizeRatio={2}
                            />
                            <div className={`status ${status}`}></div>
                        </figure>
                        <div>
                            <p>{user.username}</p>
                            <p className="text-secondary fs-13px">Note: </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center me-n1">
                        {/*
                        <button
                        className="btn btn-icon"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-title="Start video call"
                        >
                            <i className="feather icon-video icon-lg text-secondary fs-4"></i>
                        </button>
                        <button
                        className="btn btn-icon"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-title="Start voice call"
                        >
                            <i className="feather icon-phone-call icon-lg text-secondary fs-4"></i>
                        </button>
                        */}
                        <button
                        className="btn d-none d-sm-block btn-icon"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-title="Add to contacts"
                        >
                            <i className="feather icon-user-plus icon-lg text-secondary fs-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;