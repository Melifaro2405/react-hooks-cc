import React, {useState} from "react";

const computeInitialCounter = () => {
  console.log('some calculations...');
  return Math.trunc(Math.random() * 20);
};

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => computeInitialCounter());

  const [state, setState] = useState({
    title: 'Название',
    date: Date.now()
  });

  const increment = () => {
    // setCounter(counter + 1)
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
  };

  const decrement = () => setCounter(counter - 1);

  const updateTitle = () => {
    setState(prev => ({
      ...prev,
      title: 'Новое название'
    }))
  };

  return (
    <div>
      <h1>Счётчик: {counter}</h1>
      <button className="btn btn-success" onClick={increment}>Добавить</button>
      <button className="btn btn-danger" onClick={decrement}>Убрать</button>
      <button className="btn default" onClick={updateTitle}>Изменить название</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
