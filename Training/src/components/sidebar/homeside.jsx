
import Sidebarnav from './sidebar';

import styled from "styled-components"

const Style = styled.div`
  color: white;
  margin :10px;
  padding: 10px;
`

const Homeside = () => {

    
  return (
    <div className="superside">
      <div className="leftcol">
        {" "}
        {/* Sidebarnav อยู่กลางแนวตั้ง */}
        <Sidebarnav />
      </div>
      <div className="rightcol">
        {" "}
        <Style>
      <p>Hello Home</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, rem. Doloremque unde suscipit eveniet, quod saepe modi iste corrupti qui praesentium. Minus error odio vitae delectus eos excepturi, amet cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates rem nesciunt officia tempora? Id quod iste voluptatem qui quaerat, optio, doloribus ad impedit, nihil debitis ut aut quam dolorum?</p>
    </Style>
      </div>
    </div>
  );
};

export default Homeside;
