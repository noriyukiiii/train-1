import { useState } from "react";
import Sidebarnav from "./sidebar";

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
  console.log(series, lastElement);

  return (
    <div className="flex justify-between">
      <div className="w-auto">
        <Sidebarnav />
      </div>
      <div className="rightcl flex font-main w-full">
        <div className="mx-auto my-auto bg-white p-8 w-[700px] rounded-xl h-fit text-center flex flex-col items-center">
          <h1 className="text-black mb-10 text-4xl font-semibold">หาตำแหน่ง Fibonacci   </h1>
          <div>
          <label className="text-black items-start ml-4 font-main font-bold text-lg mb-2">ตำแหน่ง : </label>
          <input
            className="mb-4 bg-gray-300 w-1/2 px-2 py-1 rounded"
            type="number"
            value={n}
            onChange={(e) => {
              setN(parseInt(e.target.value));
            }}
          />
          </div>
          <button className="m-2 py-1 bg-green-500 text-white rounded mb-8 px-5" onClick={generateFibonacciSeries}>Generate</button>
          <label className="font-bold text-lg">Fibonacci Series: {lastElement} </label>
        </div>
      </div>
    </div>
  );
};

export default Calside;
