import { useState } from "react";

const Addtable = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [values, setValues] = useState(["", "", ""]);
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleValueChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);
  };

  const handleSubmit = () => {
    if (!name || values.some(value => !value)) {
      setError("Please fill in all fields");
      return;
    }
    const newData = {
      name: name,
      values: [...values],
    };
    setSubmittedData([...submittedData, newData]);
    setName("");
    setValues(["", "", ""]);
    setError("");
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className="container">
        {!showForm && (
          <button onClick={handleAddClick}>Add</button>
        )}
        {showForm && (
          <>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={handleNameChange}
            />
            {values.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                placeholder={`Value ${index + 1}`}
                onChange={(e) => handleValueChange(e, index)}
              />
            ))}
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </>
        )}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              {submittedData.map((data, index) => (
                <td key={index}>
                  {data.name}
                </td>
              ))}
            </tr>
            <tr>
              <th>Value</th>
              {submittedData.map((data, index) => (
                <td key={index}>
                  {data.values[0]}
                </td>
              ))}
            </tr>
            <tr>
              <th>Value2</th>
              {submittedData.map((data, index) => (
                <td key={index}>
                  {data.values[1]}
                </td>
              ))}
            </tr>
            <tr>
              <th>Value3</th>
              {submittedData.map((data, index) => (
                <td key={index}>
                  {data.values[2]}
                </td>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Addtable;
