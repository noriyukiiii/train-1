import { useEffect, useState } from "react";
import axios from "axios";



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
      <header>
        <h1 className="text-center font-main font-bold text-3xl my-5">ตาราง</h1>
      </header>
      <div className="flex justify-center items-center font-main">
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
    </>
  );
}

export default Bmitable;
