import { Task } from 'components/Task/Task';
import { useSelector } from 'react-redux';
import { getStatusFilter, getTasks } from 'redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul>
      {visibleTasks && Array.isArray(visibleTasks) ? (
        visibleTasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))
      ) : (
        <li>No tasks to display.</li>
      )}
    </ul>
  );
};
