import { useEffect, useState } from "react";
import "./App.css";
import AllTodo from "./component/allTodo";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [input, setInput] = useState("");
  const [delayedInp, setDelayedInp] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedInp(input);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  useEffect(() => {
    if (delayedInp === "") return;
    console.log("api calll");
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:1000/search?search=${delayedInp}`
      );
      const data = await res.json();

      setTodoData([...data]);
    };
    fetchData();
  }, [delayedInp]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:1000/getData`);
      const data = await res.json();

      setTodoData([...data]);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)} />
      <p>{delayedInp}</p>
      <AllTodo todos={todoData} />
    </div>
  );
}

export default App;
