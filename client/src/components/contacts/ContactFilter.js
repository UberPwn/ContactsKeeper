import React, { useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter } = contactContext;

  return (
    <form>
      <input
        id='contact-filter-input'
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
