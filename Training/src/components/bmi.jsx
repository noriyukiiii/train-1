import { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< Updated upstream
=======
// import "./bmi.css";
>>>>>>> Stashed changes

function Bmitable() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, [records]);

  return (
    <>
<<<<<<< Updated upstream
      <div className="flex flex-col items-center w-full mt-10">
        <header className="mb-6">
          <h1 className="font-main text-5xl">ตาราง</h1>
        </header>
        <div className="font-main">
          <table className="table">
            <thead>
              <tr className="">
                {columns.map((c, i) => (
                  <th className="border-solid border-2 border-black p-2 bg-sky-300" key={i}>{c}</th>
                ))}
=======
      <header>
        <h1 className=" text-center">ตาราง</h1>
      </header>
      <div className="bg-white ">
        <table className="table">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.weight}</td>
                <td>{d.height}</td>
                <td>{d.bmi}</td>
>>>>>>> Stashed changes
              </tr>
            </thead>
            <tbody>
              {records.map((d, i) => (
                <tr className="text-center bg-white" key={i}>
                  <td className="border-solid border-2 border-black p-2 bg-green-200">{d.id}</td>
                  <td className="border-solid border-2 border-black p-2 bg-blue-200">{d.name}</td>
                  <td className="border-solid border-2 border-black p-2 bg-orange-200">{d.weight}</td>
                  <td className="border-solid border-2 border-black p-2 bg-violet-200">{d.height}</td>
                  <td className="border-solid border-2 border-black p-2">{d.bmi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bmitable;
