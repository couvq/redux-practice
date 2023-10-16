import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return <>
    <h1>The count is: {count}</h1>
    <button onClick={() => setCount(count + 1)}>increment</button>
    <button onClick={() => setCount(count - 1)}>decrement</button>
  </>;
};

export default Counter;
