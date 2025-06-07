import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";
import Count from "./count";

const Card = () => {
  return (
    <div className="card">
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
};
export default Card;
