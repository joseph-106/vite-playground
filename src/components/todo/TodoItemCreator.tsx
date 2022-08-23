import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "@/state/todo";
import { ITodo } from "@/types/todo";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState<ITodo[]>(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
      ...oldTodoList,
    ]);
    setInputValue("");
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input
        className="py-2 pl-10 pr-10 mr-3 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <button
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700  text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
}

let id = 1;
function getId() {
  return id++;
}

export default TodoItemCreator;
