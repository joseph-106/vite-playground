import { useRecoilState } from "recoil";
import { textState } from "@/state/counter";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <input
        className="py-2 pl-10 pr-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
        type="text"
        value={text}
        onChange={onChange}
      />
      <br />
      Echo: {text}
    </>
  );
};

export default TextInput;
