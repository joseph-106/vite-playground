import { useRecoilValue } from "recoil";
import { todoListStatsState } from "@/state/todo";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <div className="p-3 mb-6 border-2 border-indigo-600 border-dotted">
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {`${formattedPercentCompleted}%`}</li>
      </ul>
    </div>
  );
};

export default TodoListStats;
