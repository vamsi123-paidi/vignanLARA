import useCounter from "../hooks/useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent