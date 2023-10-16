import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

const Counter = () => {
  // take count state from counter reducer 
const { count } = useSelector((state) => state.counter)
const dispatch = useDispatch()
return <>
    <h1>The count is: {count}</h1>
    <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    <button onClick={() => dispatch(incrementByAmount(5))}>increment by 5</button>
  </>;
};

export default Counter;
