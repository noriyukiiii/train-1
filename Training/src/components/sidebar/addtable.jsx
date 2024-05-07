import { useState } from 'react';
import './addtable.css';

function Addtable() {
  const [inputGroups, setInputGroups] = useState([]); // เริ่ม inputGroups ด้วย array ว่าง
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState('');

  const handleAddInputGroup = () => {
    const newInputGroup = {
      id: inputGroups.length + 1,
      inputs: ['', '', '', '']
    };
    setInputGroups([...inputGroups, newInputGroup]);
  };

  const handleRemoveInputGroup = (idToRemove) => {
    const updatedInputGroups = inputGroups.filter(group => group.id !== idToRemove);
    setInputGroups(updatedInputGroups);
  };

  const handleInputChange = (groupId, index, value) => {
    const updatedInputGroups = inputGroups.map(group => {
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
    // Check if any input is empty
    for (const group of inputGroups) {
      for (const input of group.inputs) {
        if (input === '') {
          setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
          return; // Stop the function if any input is empty
        }
      }
    }

    // If all inputs are filled, submit the data
    const newData = inputGroups.map(group => {
      return {
        name: group.inputs[0],
        values: [group.inputs[1], group.inputs[2], group.inputs[3]]
      };
    });
    setSubmittedData(prevData => prevData.concat(newData));
    setError(''); // Reset error message

    // Clear input data after submit
    setInputGroups([]);
  };

  return (
    <div className='form-container-input'>
      {inputGroups.map(group => (
        <div key={group.id} className='input-form2 '>
          {group.inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              placeholder={index === 0 ? `col ${group.id}` : `value ${index}`}
              onChange={(e) => handleInputChange(group.id, index, e.target.value)}
            />
          ))}
          <button onClick={() => handleRemoveInputGroup(group.id)}>ลบ</button>
        </div>
      ))}
      <button onClick={handleAddInputGroup}>เพิ่ม</button><br></br>
      <button onClick={handleSubmit}>Submit</button>

      {error && <p className="error">{error}</p>}

        <table>
          <thead>
            <tr>
              {submittedData.map((data, index) => (
                <th key={index}>{data.name}</th>
              ))}
            </tr>
            <tr>
              {submittedData.map((data, index) => (
                <td key={index}>{data.values[0]}</td>
              ))}
            </tr>
            <tr>
              {submittedData.map((data, index) => (
                <td key={index}>{data.values[1]}</td>
              ))}
            </tr>
            <tr>
              {submittedData.map((data, index) => (
                <td key={index}>{data.values[2]}</td>
              ))}
            </tr>
          </thead>
        </table>
    </div>
  );
}

export default Addtable;
