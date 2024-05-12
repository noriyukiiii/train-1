import { useState ,useEffect} from "react";
import Inputadd from "./inputadd";

function Addtable() {
  const [submittedData, setSubmittedData] = useState([]);


  const handleSubmittedData = (newData) => {
    // รวมข้อมูลใหม่กับข้อมูลเก่า
    const combinedData = [...submittedData, ...newData];
    setSubmittedData(combinedData);
  };
  
  useEffect(() => {
    // เมื่อ submittedData เปลี่ยนแปลง ให้ทำสิ่งที่ต้องการทำต่อไป
    const values = submittedData.length > 0 ? submittedData[0].values : null;
    console.log(values);
  }, [submittedData]); // useEffect จะถูกเรียกทุกครั้งเมื่อ submittedData เปลี่ยนแปลง


  return (
    <div className="m-10 font-main">
      <Inputadd onSubmittedData={handleSubmittedData} />

      <div className="flex">
        {submittedData.map((data, dataIndex) => (
          <table key={dataIndex} className="mr-3">
            <tbody className="">
              <tr className="flex flex-col text-center border-solid border-b-0 bg-white border-black">
                <th className="border-solid border-0 border-b-2 border-black bg-green-200 px-2 py-1 min-w-8 cursor-pointer">
                  {data.name}
                </th>
                {data.values.map((value, valueIndex) => (
                  <td
                    className="border-solid border-0 border-b-2 border-black px-2"
                    key={valueIndex}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Addtable;