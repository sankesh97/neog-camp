import { useRef, useState } from "react";
import "./App.css";

function App() {
  const billAmount = useRef();
  const cashGiven = useRef();
  const [returnChange, setReturnChange] = useState({
    2000: 0,
    500: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  });

  const returnCalculateHandler = () => {
    billAmount.current.value = "";
    cashGiven.current.value = "";
  };

  return (
    <div className="App">
      <h1>Cash Register Manager</h1>
      {console.log(returnChange)}
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <div>
        <label htmlFor="billAmount">
          <strong>Bill Amount:</strong>
        </label>
        <input ref={billAmount} id="billAmount" type="number" />
        <br />
        <label htmlFor="CashGiven">
          <strong>Cash Given:</strong>
        </label>
        <input ref={cashGiven} id="CashGiven" type="number" />
        <br />
        <button onClick={returnCalculateHandler}>Check</button>
      </div>
      <h2>Return Change</h2>
      <table className="table">
        <tr>
          <td>No of Notes</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Note</td>
          <td>₹2000</td>
          <td>₹500</td>
          <td>₹100</td>
          <td>₹50</td>
          <td>₹20</td>
          <td>₹10</td>
          <td>₹5</td>
          <td>₹2</td>
          <td>₹1</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
