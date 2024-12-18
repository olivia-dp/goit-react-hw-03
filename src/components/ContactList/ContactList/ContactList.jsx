import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"

const ContactList = ({ contacts }) => { 
    return (
        <ul className={s.list}>
             {contacts.map(({ id, name, number }) => (
                 <li key={id} className={s.listItem}>
                     <Contact
                    name={name}
                    number={number}
                     />
                     </li>
            ))}        
        </ul>
    );
};

export default ContactList;