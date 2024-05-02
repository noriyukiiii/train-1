/* eslint-disable no-unused-vars */
import Navlogin from "../Menu/ืnavlogin";
import { useState } from "react";
import "./logged.css";
import "../sidebar/sidebar.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebarnav from "../sidebar/sidebar";

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
        navigat('/table');
      }).catch(err => console.log(err));
  };
  
  // ให้ inputdata อัพเดทค่าเมื่อมีการเปลี่ยนแปลง
  const handleInputChange = (e) => {
    setInputdata(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <div>
          <h1>คำนวณ BMI</h1>
          <div className="item">
            <div>ชื่อ</div>
            <input
              type="text"
              placeholder="Name"
              className="item1"
              value={name}
              onChange={(e) => {
                setInputdata({ ...inputdata, name: e.target.value });
                setName(e.target.value);
                handleInputChange(e);
              }}
              required
            />
          </div>
          <div className="item">
            <div>น้ำหนัก</div>
            <input
              type="number"
              placeholder="weigth(kg)"
              className="item1"
              value={weight}
              onChange={(e) => {
                setInputdata({ ...inputdata, weight: e.target.value });
                setWeight(e.target.value);
                handleInputChange(e);
              }}
              required
            />
          </div>
          <div className="item">
            <div>ส่วนสูง</div>
            <input
              type="number"
              placeholder="height"
              className="item1"
              value={height}
              onChange={(e) => {
                setInputdata({ ...inputdata, height: e.target.value });
                setHeight(e.target.value);
                handleInputChange(e);
              }}
              required
            />
          </div>
          <div className="btn">
            <button type="submit" className="btn-insert">
              ตกลง
            </button>
          </div>


        </div>
      </form>
      <div className="table-container">
        <div className="iteme">
          <div className="item1">
          this is name : {name}
          </div>
          <div className="item2">
          this is name : {weight}
          </div>
          <div className="item3">
          this is name : {height}
          </div>
        </div>

          </div>  
    </>
  );
}

export default Logged;
