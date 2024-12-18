import { Formik, Form, Field } from 'formik';


const ContactForm = ({ setContacts }) => {
    const addNewContact = (e) => {
    const newContact = {
      id: crypto.randomUUID(),
      name: e.target.name,
      number: e.target.number,
    };
    setContacts(prev => [...prev, newContact]);
  };
  return (
    <Formik initialValues={contacts} onSubmit={handleSubmit}>
          <Form>
        <Field type="text" name="name" />
				<Field type="number" name="number" />
				<button type="submit">Add contact</button>
			</Form>
    </Formik>
  );
};

export default ContactForm;