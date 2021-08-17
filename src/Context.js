import React, { useReducer, createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const initialCompleteState = false;
const CompleteReducer = (checkedCompleted, action) => {
  switch (action.type) {
    case "COMPLETED":
      return { ...checkedCompleted, checkState: action.payload };
    default:
      return;
  }
};

const AppProvider = ({ children }) => {
  const [AllTodos, setAllTodos] = useState([]);
  const [dataError, setError] = useState("");
  const [totalTodos, setTotalTodos]= useState(0);
  const [completed, setCompleted]=useState(0);
  const [progressvalue, setProgressvalue] = useState(50);
  const [checkedCompleted, completedispatch] = useReducer(CompleteReducer, initialCompleteState);
 
    // setLoading(true);
    const fetchAllTodos=()=>{
        axios
        .get("http://localhost:9000/todos")
        .then((res) => {
          const completedTask = res.data.reduce((acc, todo) => {
            if (todo.completed) return acc + 1;
            return acc;
          }, 0);
          console.log(res.data)
          setCompleted(completedTask );
          setAllTodos(res.data);
          setTotalTodos(res.data.length)
          setProgressvalue((completedTask/totalTodos)*100)
        })
        .catch((err) => {
          setError({
            dataError: err,
          });
          console.log(err);
        });
    }
   
    useEffect(() => {
        fetchAllTodos();
      });
 
  //     axios
  //       .get("https://wp.logilab.world/blog/?rest_route=/wp/v2/posts&_embed", {
  //         params: { page: page.page },
  //       })
  //       .then((res) => {
  //         setLoadingPosts(false);
  //         // console.log(res);

  //       })
  //       .catch((res) => {
  //         setLoadingPosts(false);
  //         console.log(res.err);
  //       });
  //   }, [page]

  const value = {
    AllTodos,
    fetchAllTodos,
    dataError,
    checkedCompleted,
    completed,
    progressvalue,
    completedispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
let AppConsumer = AppContext.Consumer;
export { AppContext, AppProvider, AppConsumer };
