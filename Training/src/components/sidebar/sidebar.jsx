import { Layout, Button, theme } from "antd";
import "./sidebar.css";
import Logo from "./logo";
import Menulist from "./menulist";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
import styled from "styled-components"


function Sidebarnav() {

  const [collapsed, setCollapsed] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const SideBarContainer = styled.div`
  position: fixed;
  top: 0; /* ตำแหน่งแนวด้านบนของหน้าจอ */
  left: 0; /* ตำแหน่งแนวด้านซ้ายของหน้าจอ */
  height: 100vh; /* ความสูงเต็มจอ */
`

  return (
    <SideBarContainer>
    <Layout>
      <Sider collapsed={collapsed} collapsible className="sidebar" trigger={null}   >
        <Logo />
        <Menulist />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: colorBgContainer }}>
          <Button
            className="toggle"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>

        <Content>
        </Content>
      </Layout>
    </Layout>
    </SideBarContainer>
  );
}

export default Sidebarnav;
