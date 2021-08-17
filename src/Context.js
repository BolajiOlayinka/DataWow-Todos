import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [AllTodos, setAllTodos] = useState([]);
  const [dataError, setError] = useState("");
  const [totalTodos, setTotalTodos] = useState(10);
  const [completed, setCompleted] = useState(10);
  const [progressvalue, setProgressvalue] = useState(50);

  const dispatchAddEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADDED":
        setAllTodos([...AllTodos, payload.added]);
        return;
      default:
        return;
    }
  };
  const fetchAllTodos = () => {
    axios
      .get("http://localhost:9000/todos")
      .then((res) => {
        const completedTask = res.data.reduce((acc, todo) => {
          if (todo.completed) return acc + 1;
          return acc;
        }, 0);
        // console.log(res.data);
        setCompleted(completedTask);
        setAllTodos(res.data);
        setTotalTodos(res.data.length);
        setProgressvalue(Math.floor((completedTask / totalTodos) * 100));
      })
      .catch((err) => {
        setError({
          dataError: err,
        });
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const value = {
    AllTodos,
    fetchAllTodos,
    dataError,
    completed,
    progressvalue,
    dispatchAddEvent,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
let AppConsumer = AppContext.Consumer;
export { AppContext, AppProvider, AppConsumer };
