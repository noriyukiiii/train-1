/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Logged() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [inputdata, setInputdata] = useState({
    name: "",
    weight: "",
    height: "",
    bmi: "",
  });
  
  const navigat = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // แปลงเป็นเมตร
    const bmiResult = Math.round(weightInKg / (heightInM * heightInM) * 100) / 100;
    setInputdata(prevState => ({ ...prevState, bmi: bmiResult }));
    
  
    axios.post('http://localhost:3030/users', {
      name: inputdata.name,
      weight: inputdata.weight,
      height: inputdata.height,
      bmi: bmiResult
    })
      .then(res => {
        alert("data insert success")
      }).catch(err => console.log(err));
  };
  
  // ให้ inputdata อัพเดทค่าเมื่อมีการเปลี่ยนแปลง
  const handleInputChange = (e) => {
    setInputdata(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form className="mx-auto mt-16 rounded-xl px-16 pt-8 w-[450px] bg-white font-main text-white " onSubmit={handleFormSubmit}>
        <div className="text-black flex flex-col m-auto items-center">
          <h1 className="text-4xl font-semibold mb-4">คำนวณ BMI</h1>
          <div className="w-full">
            <div className="text-left text-2xl ml-2">ชื่อ</div>
            <input
              type="text"
              placeholder="Name"
              className="mb-4 bg-gray-300 w-full px-2 py-1 rounded"
              value={name}
              onChange={(e) => {
                setInputdata({ ...inputdata, name: e.target.value });
                setName(e.target.value);
                handleInputChange(e);
              }}
              required
            />
          </div>
          <div className=" text-left w-full">
            <div className="text-2xl ml-2">น้ำหนัก</div>
            <input
              type="number"
              placeholder="weigth(kg)"
              className="mb-4 bg-gray-300 w-full px-2 py-1 rounded"
              value={weight}
              onChange={(e) => {
                setInputdata({ ...inputdata, weight: e.target.value });
                setWeight(e.target.value);
                handleInputChange(e);
              }}
              required
            />
          </div>
          <div className="text-left w-full">
            <div className="ml-2 text-2xl">ส่วนสูง</div>
            <input
              type="number"
              placeholder="height"
              className="mb-4 bg-gray-300 w-full px-2 py-1 rounded"
              value={height}
              onChange={(e) => {
                setInputdata({ ...inputdata, height: e.target.value });
                setHeight(e.target.value);
                handleInputChange(e);
              }}
              required
            />
          </div>
          <div className="flex">
            <button type="submit" className="bg-green-300 px-4 rounded mb-5">
              ตกลง
            </button>
          </div>


        </div>
      </form>
    </>
  );
}

export default Logged;