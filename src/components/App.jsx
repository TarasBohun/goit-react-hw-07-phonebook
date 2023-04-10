import { FormContacts } from './FormContacts';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { GlobalStyle } from './GlobalStyles';
import { Container } from './Container';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/getContacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <FormContacts />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};
