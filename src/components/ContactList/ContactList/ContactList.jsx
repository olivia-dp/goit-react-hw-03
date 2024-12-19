import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"


const ContactList = ({ contacts, setContacts }) => { 
    const deleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };
    return (
        <ul className={s.list}>
             {contacts.map(({ id, name, number }) => (
                 <li key={id} className={s.listItem}>
                     <Contact
                         id={id}
                        name={name}
                         number={number}
                         deleteContact={deleteContact}
                     />
                     </li>
            ))}        
        </ul>
    );
};

export default ContactList;