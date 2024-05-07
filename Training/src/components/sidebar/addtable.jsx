import { useState } from 'react';
import './addtable.css';

function Addtable() {
  const [inputGroups, setInputGroups] = useState([]);
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
    for (const group of inputGroups) {
      for (const input of group.inputs) {
        if (input === '') {
          setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
          return;
        }
      }
    }

    const newData = inputGroups.map(group => {
      return {
        name: group.inputs[0],
        values: [group.inputs[1], group.inputs[2], group.inputs[3]]
      };
    });
    setSubmittedData(prevData => prevData.concat(newData));
    setError('');
    setInputGroups([]);
  };

  const handleSort = (columnName) => {
    const sortedData = [...submittedData].sort((a, b) => {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    });
    setSubmittedData(sortedData);
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
            {submittedData.length > 0 &&
              Object.keys(submittedData[0]).map((columnName, index) => (
                <th key={index} onClick={() => handleSort(columnName)}>
                  {columnName}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              {Object.values(data).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Addtable;
