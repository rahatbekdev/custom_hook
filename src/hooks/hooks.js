import { useState } from "react";

const useCounter = (incrementLevel = 1, decrementLevel = 1) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + incrementLevel);
  };

  const decrement = () => {
    setCount((prevCount) =>
      prevCount > 0 ? prevCount - decrementLevel : prevCount
    );
  };

  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
