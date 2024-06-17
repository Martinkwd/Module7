import { useState } from "react";
// import { useEffect } from "react";
import { useData } from "./useData";
import { useUserContext } from "./EmojiProvider";
import { EmojiProvider } from "./EmojiProvider";
// import { useReducer } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  // const [state, dispatch] = useReducer();
  const { currentEmoji, handleUpdateEmoji } = useUserContext();

  // const [activity, setActivity] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setActivity(json.bitcoin[currency]);
  //     });
  // }, [currency]);
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const data = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );
  const Activity = data ? data.activity : "not found";

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      Current Mood: {currentEmoji === "Happy" ? "😄" : "😥"}
      <div>
        <strong>Suggested Currency: </strong>
        {/* {activity} */}
        {data && data.bitcoin[currency.toLowerCase()]}
      </div>
    </div>
  );
}

export default BitcoinRates;
