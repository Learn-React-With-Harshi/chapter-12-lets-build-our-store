
import { useState, useEffect } from "react";

/* Refer coding-assigment.md file for explanation */  
export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const value_string = window.localStorage.getItem(key);
    return JSON.parse(value_string) || []; // default value is [] if no value is there in key 
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;