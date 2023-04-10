import { Formik, Field, ErrorMessage } from 'formik';
import { FormField, Form } from './FormContacts.styled';

import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { addContact } from 'redux/getContacts';
// import { selectIsLoading } from 'redux/selectors';

export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  // const isLoading = useSelector(selectIsLoading);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      onSubmit={(values, actions) => {
        if (
          contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          alert(`${values.name} is already in contacts`);
          return;
        }
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </FormField>

        <FormField>
          <Field
            type="tel"
            name="phone"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </FormField>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
