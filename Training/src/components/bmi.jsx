import { useEffect, useState } from "react"
import axios from 'axios';
import './bmi.css'

function Bmitable() {
    const [columns, setColumns] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3030/users')
        .then(res =>{
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    }, [])
  return (
    <>
    <header>
        <h1>ตาราง</h1>
    </header>
    <div className="container1">
        <table className="table">
            <thead>
                <tr>
                {columns.map((c, i) =>(
                    <th key={i}>{c}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {
                    records.map((d, i)=>(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.weight}</td>
                            <td>{d.height}</td>
                            <td>{d.bmi}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
    </>
  )
}

export default Bmitable
