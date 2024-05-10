import { Menu } from 'antd';
import { HomeOutlined ,AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Menulist = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ลบข้อมูลการเข้าสู่ระบบออกจาก local storage
    localStorage.removeItem("loggedInUser");
    // ทำการ redirect ผู้ใช้ไปยังหน้า login
    navigate("/");
  };

  return (
    <Menu theme='dark' mode="inline" className='menubar'>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <NavLink to="/homeside">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="BMI" icon={<AppstoreOutlined />}>
        <NavLink to="/table">Add Table</NavLink>
      </Menu.Item>
      <Menu.Item key="Bmi Cal" icon={<AppstoreOutlined />}>
        <NavLink to="/bmical">BMI CAL</NavLink>
      </Menu.Item>
      <Menu.Item key="cal" icon={<AppstoreOutlined />}>
        <NavLink to="/cal">Fibonacci</NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<SettingOutlined />} onClick={handleLogout}>
        log out
      </Menu.Item>
    </Menu>
  );
};

export default Menulist;
