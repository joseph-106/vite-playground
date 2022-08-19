import { useRecoilValue } from "recoil";
import { charCountState } from "@/state/counter";

const Count = () => {
  const count = useRecoilValue(charCountState);
  return <div>Count: {count}</div>;
};

export default Count;
