import { useState } from "react";

function Addtable() {
  const [inputGroups, setInputGroups] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");
  const [sortDirection, setSortDirection] = useState("asc"); // เริ่มต้นเรียงลำดับจากน้อยไปมาก

  const handleAddInputGroup = () => {
    const newInputGroup = {
      id: inputGroups.length + 1,
      inputs: ["", "", "", ""],
    };
    setInputGroups([...inputGroups, newInputGroup]);
  };

  const handleRemoveInputGroup = (idToRemove) => {
    const updatedInputGroups = inputGroups.filter(
      (group) => group.id !== idToRemove
    );
    setInputGroups(updatedInputGroups);
  };

  const handleInputChange = (groupId, index, value) => {
    const updatedInputGroups = inputGroups.map((group) => {
      if (group.id === groupId) {
        const newInputs = [...group.inputs];
        newInputs[index] = value;
        return { ...group, inputs: newInputs };
      }
      return group;
    });
    setInputGroups(updatedInputGroups);
  };

  const handleSubmit = () => {
    for (const group of inputGroups) {
      for (const input of group.inputs) {
        if (input === "") {
          setError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
          return;
        }
      }
    }

    // สร้าง table แยกตามข้อมูลที่ถูกส่งเข้ามาในแต่ละครั้ง
    inputGroups.forEach((group) => {
      const newData = {
        name: group.inputs[0],
        values: [group.inputs[1], group.inputs[2], group.inputs[3]],
      };
      setSubmittedData((prevData) => [...prevData, [newData]]);
    });

    setError("");
    setInputGroups([]);
  };

  const handleSort = (columnName) => {
    // สร้างสำเนาข้อมูลที่จะทำการเรียงลำดับ
    const copiedData = [...submittedData];
  
    // เรียงลำดับข้อมูลตามชื่อของไอเทม (columnName) โดยดูจากค่าของ sortDirection
    const sortedData = copiedData.sort((a, b) => {
      if (sortDirection === "asc") {
        return a[0][columnName].localeCompare(b[0][columnName]);
      } else {
        return b[0][columnName].localeCompare(a[0][columnName]);
      }
    });
  
    // ปรับเปลี่ยนทิศทางการเรียงลำดับ
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  
    // อัปเดตข้อมูลที่เรียงลำดับแล้วลงใน state
    setSubmittedData(sortedData);
  };
  
  

  return (
    <div className="m-10 font-main ">
      <div className="flex flex-col">
        {inputGroups.map((group) => (
          <div
            key={group.id}
            className="flex justify-around  items-end bg-white rounded-xl mb-4"
          >
            {group.inputs.map((input, index) => (
              <input
                key={index}
                type="text"
                className="bg-gray-200 rounded my-4 p-1 pl-3"
                value={input}
                placeholder={index === 0 ? `col ${group.id}` : `value ${index}`}
                onChange={(e) =>
                  handleInputChange(group.id, index, e.target.value)
                }
              />
            ))}
            <button
              className="my-5 bg-red-400 rounded px-3"
              onClick={() => handleRemoveInputGroup(group.id)}
            >
              ลบ
            </button>
          </div>
        ))}

        <div className="flex flex-col justify-center items-center">
          <div>
            {error && (
              <div className="text-xl bg-red-200 p-3 rounded-xl text-red-700">
                <p className="error">{error}</p>
              </div>
            )}
          </div>
          <button
            className="bg-green-300 my-4 w-[70px] py-1 px-2 rounded"
            onClick={handleAddInputGroup}
          >
            เพิ่ม
          </button>
          <button
            className="bg-green-300 w-[70px] py-1 px-2 rounded mb-4"
            onClick={handleSubmit}
          >
            ยืนยัน
          </button>
        </div>
      </div>

      <div className="flex">
        {submittedData.map((data, dataIndex) => (
          <table key={dataIndex} className="mr-3">
            <tbody className="">
              {data.map((item, itemIndex) => (
                <tr
                  key={itemIndex}
                  className="flex flex-col text-center border-solid border-b-0 bg-white border-black"
                >
                 <th
  onClick={() => handleSort(item.name)}
  className="border-solid border-0 border-b-2 border-black bg-green-200 px-2 py-1 min-w-8 cursor-pointer"
>
  {item.name}
</th>

                  {item.values.map((value, valueIndex) => (
                    <td
                      className="border-solid border-0 border-b-2 border-black px-2"
                      key={valueIndex}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Addtable;
