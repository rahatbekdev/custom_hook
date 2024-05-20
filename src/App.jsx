import { CounterHooks } from "./components/CounterHooks";
import useInput from "./hooks/input";

const App = () => {
  const emailInput = useInput(''); 

  return (
    <div className="p-4 bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <CounterHooks /> 
      <div>
        <input className="border-2 border-amber-500 bg-yellow-300 h-11"
          type="text"
          value={emailInput.value}
          onChange={emailInput.onChange}
          placeholder="Введите ваш email"
        />
        {emailInput.error && <span>{emailInput.error}</span>}
        <button className=" bg-yellow-600 p-2 h-11 ml-3" onClick={emailInput.reset}>Сбросить</button>
      </div>
    </div>
  );
};

export default App;
