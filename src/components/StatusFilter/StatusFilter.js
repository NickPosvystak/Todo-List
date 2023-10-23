import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilter } from 'redux/constants';
import { setStatusFilter } from 'redux/filterSlice';
import { getStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
      <Button
        selected={filter === StatusFilter.all}
        onClick={() => handleFilterChange(statusFilter.all)}
      >
        ALL
      </Button>
      <Button
        selected={filter === StatusFilter.active}
        onClick={() => handleFilterChange(statusFilter.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === StatusFilter.completed}
        onClick={() => handleFilterChange(statusFilter.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
