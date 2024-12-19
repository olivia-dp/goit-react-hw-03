import s from "./Contact.module.css"




const Contact = ({ id, name, number, deleteContact }) => {
    
    return (
           <>
               
                
                <div>
                    <div className={s.cont}>
                        <img className={s.avatar} src={"https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000"} alt="user" width="24" />
                        <p className={s.name}>{name}</p>
                    </div>
                    <div className={s.cont}>
                        <img className={s.avatar} src={"https://img.icons8.com/?size=100&id=78382&format=png&color=000000"} alt="user" width="24" />
                        <p className={s.number}>{number}</p>
                    </div>
                </div>
                
            <button className={s.button} onClick={() =>  deleteContact(id) }>Delete</button>
           </>
    )
 };

export default Contact;