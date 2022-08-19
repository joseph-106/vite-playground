import { Link } from "react-router-dom";
import { FlexContainer, LinkButton } from "@/components/shared";
import { TextInput, Count } from "@/components/counter";

const Counter = () => {
  return (
    <FlexContainer>
      <TextInput />
      <Count />
      <Link to={"/"}>
        <LinkButton text={"Home"} />
      </Link>
    </FlexContainer>
  );
};

export default Counter;
