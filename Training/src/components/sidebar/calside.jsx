import { useState } from "react";
import Sidebarnav from "./sidebar";
import './calside.css';

const Calside = () => {
  const [n, setN] = useState(0);
  const [series, setSeries] = useState([]);
  let lastElement = series[series.length - 1];

  const generateFibonacciSeries = () => {
    let t1 = 1; // เริ่มต้นจาก 0
    let t2 = 1; // เริ่มต้นจาก 1
    let fibonacciSeries = [t1, t2];


    for (let i = 3; i <= n; ++i) {
      let nextTerm = t1 + t2;
      fibonacciSeries.push(nextTerm);
      t1 = t2;
      t2 = nextTerm;
    }

    setSeries(fibonacciSeries);
    

  };
  console.log(series, lastElement)


  return (
    <div className='superside'>
      <div className="leftcol">
        <Sidebarnav />
      </div>
      <div className="rightcol">
        <h1>Enter the number of terms: </h1>
        <input
          className="number"
          type="number"
          value={n}
          onChange={(e) => {
            setN(parseInt(e.target.value));
          }}
        />
        <button onClick={generateFibonacciSeries}>Generate</button>
        <br />
        <label className="result">Fibonacci Series: {lastElement} </label>
      </div>
    </div>
  );
};

export default Calside;
