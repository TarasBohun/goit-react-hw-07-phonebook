import { filterContact } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = e => {
    const filter = e.currentTarget.value;
    dispatch(filterContact(filter));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          value={value}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};
