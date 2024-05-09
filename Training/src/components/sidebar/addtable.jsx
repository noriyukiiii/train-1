import { useState } from "react";
import "./addtable.css";

function Addtable() {
  const [inputGroups, setInputGroups] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");

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

  return (
    <div>
      <div className="form-container-input">
        {inputGroups.map((group) => (
          <div key={group.id} className="input-form2">
            {group.inputs.map((input, index) => (
              <input
                key={index}
                type="text"
                value={input}
                placeholder={index === 0 ? `col ${group.id}` : `value ${index}`}
                onChange={(e) =>
                  handleInputChange(group.id, index, e.target.value)
                }
              />
            ))}
            <button onClick={() => handleRemoveInputGroup(group.id)}>ลบ</button>
          </div>
        ))}
        <button className="bg-white" onClick={handleAddInputGroup}>เพิ่ม</button>
        <br />
        <button className="bg-white" onClick={handleSubmit}>Submit</button>
        {error && <p className="error">{error}</p>}
      </div>

      <div className="tabl">
        {submittedData.map((data, dataIndex) => (
          <table key={dataIndex} className="submitted-table">
            <tbody className="tbody-table">
              {data.map((item, itemIndex) => (
                <tr key={itemIndex} className="tr-table">
                  <td >{item.name}</td>
                  {item.values.map((value, valueIndex) => (
                    <td key={valueIndex}>{value}</td>
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
