import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "@/state/todo";
import { FlexContainer, LinkButton } from "@/components/shared";
import {
  TodoItem,
  TodoItemCreator,
  TodoListStats,
  TodoListFilters,
} from "@/components/todo";
import { ITodo } from "@/types/todo";

const Todo = () => {
  const todoList: any = useRecoilValue(filteredTodoListState);

  return (
    <FlexContainer>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: ITodo) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      <Link to={"/"}>
        <LinkButton text={"Home"} />
      </Link>
    </FlexContainer>
  );
};

export default Todo;
