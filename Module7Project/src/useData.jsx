import { useEffect, useState } from "react";
// import { useEffect, useReducer } from "react";
// import axios from "axios";

export function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      let ingnore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ingnore) {
            setData(json);
          }
        });
      return () => {
        ingnore = true;
      };
    }
  }, [url]);
  return data;
}
