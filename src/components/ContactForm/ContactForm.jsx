import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
const ContactForm = ({ setContacts }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});
    const addNewContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
      };
		actions.resetForm();

    setContacts(prev => [...prev, newContact]);
  };
  
  return (
      <Formik initialValues={ initialValues } onSubmit={addNewContact} validationSchema={FeedbackSchema} >
        <Form className={s.form}>
          <label>Name</label>
          <Field type="text" name="name" className={s.field} />
          <ErrorMessage name="name" component="span" className={s.error} />
          <label>Number</label>
          <Field type="number" name="number" className={s.field} />
          <ErrorMessage name="number" component="span" className={s.error}/>
          <button type="submit" className={s.button}>Add contact</button>
  			</Form>
      </Formik>
    
  );
};

export default ContactForm;