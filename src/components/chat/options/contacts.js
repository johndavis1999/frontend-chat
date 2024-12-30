import React, { useRef, useEffect, useState } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { useGlobalContext } from '../../context/GlobalVariables';
import ContactItem from './contactItem';

function Contacts() {
  const { apiUrl, authToken } = useGlobalContext();
  const contactsRef = useRef(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (contactsRef.current) {
      const sidebarBodyScroll = new PerfectScrollbar(contactsRef.current, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: true,
      });

      return () => {
        sidebarBodyScroll.destroy();
      };
    }
  }, []);

  useEffect(() => {
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
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, [apiUrl, authToken]);

  return (
    <div className="tab-pane fade show active ps ps--active-y" aria-labelledby="chats-tab" ref={contactsRef}>
      <p className="text-secondary mb-1">Contacts</p>
      <ul className="list-unstyled chat-list px-1">
        {contacts.map((contact) => (
          <ContactItem contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
