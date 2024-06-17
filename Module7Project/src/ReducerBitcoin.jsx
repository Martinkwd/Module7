import { useReducer } from "react";

export default function reducerBitcoin() {
  const [postResults, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  });
}
