import { useState, useCallback ,useEffect} from "react";
import Inputadd from "./inputadd";

function Addtable() {
  const [submittedData, setSubmittedData] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortColumnIndex, setSortColumnIndex] = useState(0); // ใช้เก็บ index ของคอลัมน์ที่ใช้ในการเรียงลำดับ

  const sortArray = useCallback(
    (index) => {
      setSubmittedData((prevData) => {
        const sortedData = [...prevData]; // คัดลอกข้อมูลเดิมเพื่อป้องกันการแก้ไขตรงที่อาจจะส่งผลกระทบกับ state โดยตรง
        if (sortedData[index]) { // ตรวจสอบว่า sortedData[index] ไม่เป็น undefined
          const columnToSort = sortedData[index].slice(1); // เลือกเฉพาะข้อมูลในคอลัมน์ที่เราต้องการเรียงลำดับ
  
          // เรียงลำดับตามประเภทของข้อมูล
          const numericArray = columnToSort.filter((item) => !isNaN(item));
          const stringArray = columnToSort.filter((item) => isNaN(item));
  
          if (sortDirection === "asc") {
            numericArray.sort((a, b) => a - b);
            stringArray.sort((a, b) => a.localeCompare(b));
          } else if (sortDirection === "desc") {
            numericArray.sort((a, b) => b - a);
            stringArray.sort((a, b) => b.localeCompare(a));
          }
  
          // รวมข้อมูลกลับเข้าไปใน sortedData
          sortedData[index] = [sortedData[index][0], ...numericArray, ...stringArray];
        }
        return sortedData;
      });
    },
    [sortDirection]
  );


  useEffect(() => {
    if (sortColumnIndex !== undefined) {
      sortArray(sortColumnIndex);
    }
  }, [sortColumnIndex, sortArray]);
  
  const handleSubmittedData = (newData) => {
    const combinedData = submittedData.concat(newData);
    setSubmittedData(combinedData);
    sortArray(sortColumnIndex); // เรียกใช้ sortArray เมื่อมีการเพิ่มข้อมูล
  };
  
  const toggleSortDirection = useCallback(
    (index) => {
      if (index !== -1) { // ตรวจสอบว่า index ไม่ใช่ -1
        const newDirection = sortDirection === "asc" ? "desc" : "asc";
        setSortDirection(newDirection);
        setSortColumnIndex(index);
        sortArray(index);
      }
    },
    [sortDirection, sortArray]
  );

  return (
    <div className="m-10 font-main">
      <Inputadd onSubmittedData={handleSubmittedData} />

      <div className="flex">
        {submittedData.map((item, index) => (
          <table key={index} className="mr-3">
            <thead>
              <tr className="flex flex-col text-center border-solid border-b-0 bg-white border-black">
                <th
                  onClick={() => toggleSortDirection(index)}
                  className="border-solid border-0 border-b-2 border-black bg-green-200 px-2 py-1 min-w-8 cursor-pointer"
                >
                  <button>{item[0]}</button>
                </th>
                <td className="border-solid border-0 border-b-2 border-black px-2">
                  {item[1]}
                </td>
                <td className="border-solid border-0 border-b-2 border-black px-2">
                  {item[2]}
                </td>
                <td className="border-solid border-0 border-b-2 border-black px-2">
                  {item[3]}
                </td>
              </tr>
            </thead>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Addtable;
