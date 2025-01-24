import React, {useState, useEffect} from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    let value = JSON.parse(window.localStorage.getItem(key)) || initialValue;
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;