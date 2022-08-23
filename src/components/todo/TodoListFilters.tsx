import { useRecoilState } from "recoil";
import { todoListFilterState } from "@/state/todo";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setFilter(value);
  };

  return (
    <select
      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
      value={filter}
      onChange={updateFilter}
    >
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
  );
};

export default TodoListFilters;
