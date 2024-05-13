/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from 'prop-types';

function Inputadd({ onSubmittedData }) {
  const [inputGroups, setInputGroups] = useState([]);
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
    const submittedData = inputGroups.map((group) => [
      group.inputs[0],
      group.inputs[1],
      group.inputs[2],
      group.inputs[3]
    ]);

    // เรียกใช้งาน function ที่รับมาจาก props เพื่อส่ง submitted data ไปยัง component อื่น ๆ
    onSubmittedData(submittedData);

    setError("");
    setInputGroups([]);
  };

  return (
    <div>
      <div className="flex flex-col">
        {inputGroups.map((group) => (
          <div
            key={group.id}
            className="flex justify-around items-end bg-white rounded-xl mb-4"
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
    </div>
  );
}

Inputadd.propTypes = {
  onSubmittedData: PropTypes.func.isRequired,
};

export default Inputadd;
