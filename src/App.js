import { useRef, useState } from "react";
import "./App.css";

const calculateFunc = (cashGiven, billAmount) => {
  let tempChange = {};
  let tempValue = cashGiven - billAmount;
  for (let i of [2000, 500, 100, 50, 20, 10, 5, 2, 1]) {
    if (tempValue >= i) {
      tempChange[i] = Math.floor(tempValue / i);
      console.log("tempChange" + tempChange[i]);
      tempValue -= tempChange[i] * i;
      console.log(tempChange);
    } else {
      tempChange[i] = 0;
    }
  }
  return tempChange;
};

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
  const [outputText, setOutputText] = useState("");

  const returnCalculateHandler = () => {
    setOutputText("");
    setReturnChange({
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
    if (
      !billAmount.current.value ||
      !cashGiven.current.value ||
      parseInt(cashGiven.current.value) < parseInt(billAmount.current.value)
    ) {
      setOutputText(
        "Bro, Did you forget to enter the amount or entered an Invalid Amount. Please check again "
      );
    } else if (cashGiven.current.value > 50000) {
      setOutputText(
        "Kala Dhan Detected, Calling Modi ji! (You are not allowed to use cash more than 50,000)"
      );
    } else {
      setReturnChange(
        calculateFunc(
          parseInt(cashGiven.current.value),
          parseInt(billAmount.current.value)
        )
      );
    }
    billAmount.current.value = "";
    cashGiven.current.value = "";
  };

  return (
    <div className="App">
      <header>
        <h1>Cash Register Manager</h1>
      </header>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <div>
        <label htmlFor="billAmount">
          <strong>Bill Amount:</strong>
        </label>
        <input ref={billAmount} id="billAmount" type="number" min="0" />
        <br />
        <label htmlFor="CashGiven">
          <strong>Cash Given:</strong>
        </label>
        <input ref={cashGiven} id="CashGiven" type="number" min="0" />
        <br />
        <button onClick={returnCalculateHandler}>Check</button>
      </div>
      {outputText && <p>{outputText}</p>}
      <h2>Return Change</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>No of Notes</td>
            <td>{returnChange[2000]}</td>
            <td>{returnChange[500]}</td>
            <td>{returnChange[100]}</td>
            <td>{returnChange[50]}</td>
            <td>{returnChange[20]}</td>
            <td>{returnChange[10]}</td>
            <td>{returnChange[5]}</td>
            <td>{returnChange[2]}</td>
            <td>{returnChange[1]}</td>
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
        </tbody>
      </table>
      <footer>
        <p>30th Jul 2022 | Sankesh Jain</p>
      </footer>
    </div>
  );
}

export default App;
