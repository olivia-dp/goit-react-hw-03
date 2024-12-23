import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList/ContactList"
import SearchBox from './components/SearchBox/SearchBox'

const LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-Contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return LIST; 
  });

   const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("saved-Contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts}/>
      <SearchBox searchValue={searchValue} onSearchChange={setSearchValue} />
      <ContactList contacts={filteredContacts} setContacts={setContacts} />
    </>
  )
}

export default App
