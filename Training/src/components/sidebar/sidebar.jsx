import { Layout, Button, theme } from "antd";
import "./sidebar.css";
import Logo from "./logo";
import Menulist from "./menulist";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

function Sidebarnav() {
  const [collapsed, setCollapsed] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="SideBarCintainer">
      <Layout className="">
        <Sider
          collapsed={collapsed}
          collapsible
          className={`sidebar ${collapsed ? "sticky top-0 h-screen" : ""}`}
          trigger={null}
        >
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

          <Content></Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Sidebarnav;
