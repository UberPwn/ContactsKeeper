import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  return (
    <form>
      <input
        type='text'
        placeholder='Filter Contacts...'
        onChange={e =>
          e.target.value !== '' ? filterContacts(e.target.value) : clearFilter()
        }
      />
    </form>
  );
};

export default ContactFilter;
