import { List, Item, Container } from './Contacts.styled';

import { useContacts } from 'hooks/useContacts';
import { deleteContact } from 'redux/getContacts';
import { useDispatch } from 'react-redux';
// import { selectIsLoading } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useContacts();
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Container key={id}>
            <Item>
              {name}: {phone}
            </Item>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              {/* {isLoading ? 'Loading' : 'Delete'} */}
              Delete
            </button>
          </Container>
        );
      })}
    </List>
  );
};
