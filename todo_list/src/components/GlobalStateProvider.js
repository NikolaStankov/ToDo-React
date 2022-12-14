import React, { useEffect, useCallback, useState, createContext } from "react";

const initialGlobalState = {
  todos: []
};

// Create a Context for the (global) State
const GlobalState = createContext();

const GlobalStateProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialGlobalState ?? {});

  const setGlobalState = useCallback(
    (data = {}) => {
      const newTodos = { ...todos };

      // Loop over the data items by key, only updating those which have changed
      Object.keys(data).forEach((key) => {
        newTodos[key] = data[key];
      });

      // Update the state with the new State
      setTodos(newTodos);
    },
    [todos, setTodos]
  );

  useEffect(() => {
    GlobalState.set = setGlobalState;
  }, [setGlobalState]);

  return (
    // Pass the current value of GlobalState, based on this components' State, down
    <GlobalState.Provider value={todos}>{children}</GlobalState.Provider>
  );
};

export const useGlobalState = () => React.useContext(GlobalState)

export default GlobalStateProvider;
window.GlobalState = GlobalState;
