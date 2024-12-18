import s from "./Contact.module.css"


const Contact = ({ name, number }) => {
    return (
           <>
               <div>
                    <h3>{name}</h3>
                    <p>{number}</p>
               </div>
            <button className={s.button}>Delete</button>
           </>
    )
 };

export default Contact;