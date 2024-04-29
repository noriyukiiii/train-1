import styled from "styled-components"
import Nav from "./nav"

const Style = styled.div`
  color: white;
  margin :10px;
  padding: 10px;
`

function Home(login) {

  return (
  <>
  <Nav/>
    <Style>
      <p>Hello Home</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, rem. Doloremque unde suscipit eveniet, quod saepe modi iste corrupti qui praesentium. Minus error odio vitae delectus eos excepturi, amet cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates rem nesciunt officia tempora? Id quod iste voluptatem qui quaerat, optio, doloribus ad impedit, nihil debitis ut aut quam dolorum?</p>
      <button onClick={login}>login</button>
    </Style>
  </>
  )
}

export default Home
