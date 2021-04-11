import { useDispatch, useSelector } from "react-redux";

import CounterPresenter from "../components/CounterPresenter";

import { RootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIcrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <CounterPresenter
      count={count}
      onIncrease={onIcrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
