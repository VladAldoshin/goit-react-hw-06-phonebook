import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice';
import { getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};


