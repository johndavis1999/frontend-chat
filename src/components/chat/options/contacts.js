import React, { useRef, useEffect, useState } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { useGlobalContext } from '../../context/GlobalVariables';

function Contacts() {
    const { apiUrl, authToken } = useGlobalContext();
    const contactsRef = useRef(null);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (contactsRef.current) {
            // Inicializa PerfectScrollbar solo si el contenedor está disponible
            const sidebarBodyScroll = new PerfectScrollbar(contactsRef.current, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollX: true,
            });

            // Limpiar el efecto cuando el componente se desmonte
            return () => {
                sidebarBodyScroll.destroy();
            };
        }
    }, []);

    useEffect(() => {
        // Función para obtener los contactos
        const fetchContacts = async () => {
            try {
                const response = await fetch(`${apiUrl}/contacts`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error fetching contacts');
                }

                const data = await response.json();
                setContacts(data); // Almacena los contactos en el estado
            } catch (error) {
                console.error(error);
            }
        };

        fetchContacts();
    }, [apiUrl, authToken]);

    return (
        <div className="tab-pane fade show active ps ps--active-y" aria-labelledby="chats-tab"ref={contactsRef}>
            <p className="text-secondary mb-1">Contacts</p>
            <ul className="list-unstyled chat-list px-1">
                {contacts.map((contact) => (
                    <>
                        <li className="chat-item pe-1">
                            <a href="#" className="d-flex align-items-center">
                                <figure className="mb-0 me-2">
                                    <img src="./assets/img/face2.jpg" className="img-xs rounded-circle" alt="user"/>
                                    {/*
                                        <div className="status offline"></div>
                                        <div className="status online"></div>
                                    */}
                                </figure>
                                <div className="d-flex align-items-center justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                        <p className="text-body">{ contact.id_contact.username }</p>
                                        <div className="d-flex align-items-center">
                                            <p className="text-secondary fs-13px">Note: </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end text-body">
                                        <i className="feather icon-message-square text-primary icon-md me-2"></i>
                                    {/*
                                        <i className="feather icon-phone-call text-primary icon-md me-2"></i>
                                        <i className="feather icon-video icon-sm text-primary me-1"></i>
                                    */}
                                    </div>
                                </div>
                            </a>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default Contacts;
