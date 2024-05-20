import useCounter from "../hooks/hooks";

export const CounterHooks = () => {
  const { count, increment, decrement, reset } = useCounter(4, 2);

  return (
    <div className="p-4">
      <p className="mb-4">Счетчик: {count}</p>
      <div className="space-x-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Увеличить
        </button>
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Уменьшить
        </button>
        <button 
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={reset}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
};
