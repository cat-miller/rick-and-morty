import { useState } from "react";

function usePager(initialPage, lastPage) {
  const [page, setPage] = useState(initialPage);

  function nextPage() {
    initialPage === 0 ? "error" : setPage((page = 1));
  }
}

function useCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return { counter, increment, decrement };
}

export default function Hooks() {
  const { counter, increment, decrement } = useCounter();
  return (
    <>
      <h1>Hooks</h1>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
