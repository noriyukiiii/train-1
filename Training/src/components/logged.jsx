import { useLocation } from "react-router-dom"
import styled from "styled-components";

const Textt = styled.div`
    color : red;
    background :black;
    backdrop-filter : blur(10px);
    
`; 

function Logged() {
    let location = useLocation()
    const { username } = location.state;
  return (
    <Textt>
     <h1>Loggin สำเร็จแล้วงับ</h1>
     นี่คือ username : {username}
     นี่คือ password : {location.state.password}
    </Textt>
  )
}

export default Logged
