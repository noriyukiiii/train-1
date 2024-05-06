import Sidebarnav from './sidebar';
import styled from "styled-components"

const Container = styled.div`
  position: relative; /* เพื่อให้ Container ทำหน้าที่เป็นพื้นที่หลักของการแสดงผล */
`

const SideBarContainer = styled.div`
  position: fixed;
  top: 0; /* ตำแหน่งแนวด้านบนของหน้าจอ */
  left: 0; /* ตำแหน่งแนวด้านซ้ายของหน้าจอ */
  height: 100vh; /* ความสูงเต็มจอ */
`

const Homeside = () => {
  return (
    <Container className="superside">
      <SideBarContainer>
        <Sidebarnav />
      </SideBarContainer>
      <div className="rightcol">
        <div>
          <h1>ยินดีต้อนรับ</h1>
        </div>
      </div>
    </Container>
  );
};
  
export default Homeside;
