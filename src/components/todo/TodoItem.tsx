import { useRecoilState } from "recoil";
import { todoListState } from "@/state/todo";
import { ITodo, TReplaceItem, TRemoveItem } from "@/types/todo";

const TodoItem = ({ item }: { item: ITodo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="flex justify-center mt-5">
      <input
        className="p-1 mr-3 border border-indigo-600 border-solid rounded-xl"
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      <input
        className="cursor-pointer "
        id="checkbox"
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button
        className="px-3 py-1 ml-3 text-sm font-medium leading-6 text-white rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700"
        onClick={deleteItem}
      >
        X
      </button>
    </div>
  );
};

const replaceItemAtIndex: TReplaceItem = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex: TRemoveItem = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default TodoItem;
