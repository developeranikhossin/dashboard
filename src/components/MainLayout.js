import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { AiFillCustomerService } from 'react-icons/ai';
import { BsFillCartDashFill } from 'react-icons/bs';
import { BiTransferAlt } from 'react-icons/bi';
import { MdPreview } from 'react-icons/md';
import { MdOutlineToday } from 'react-icons/md';
import { BsXDiamond } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import { BiColor } from 'react-icons/bi';
import HeaderImg from "../asset/image/profile.jpeg";


const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
            <h2 className='text-white fs-5 text-center py-3 mb-0'>
              <span className='sm-logo'>AD</span>
              <span className='lg-logo'>Admin</span>
            </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key })=>{
              if (key === 'signout') {
                
              } else {
                navigate(key);
              }
          }}
          items={[
            {
              key: '/',
              icon: <AiFillDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiFillCustomerService />,
              label: 'Customers',
            },
            {
              key: 'orders',
              icon: <BiTransferAlt />,
              label: 'Orders',
            },
            {
              key: 'overview',
              icon: <MdPreview />,
              label: 'Overview',
            },
            {
              key: 'daily',
              icon: <MdOutlineToday />,
              label: 'Daily',
            },
            {
              key: 'monthly',
              icon: <BsXDiamond />,
              label: 'Monthly',
            },
            {
              key: 'products',
              icon: <BsFillCartDashFill />,
              label: 'Products',
            },
            {
              key: 'add-product',
              icon: <BsFillCartDashFill />,
              label: 'Add Product',
            },
            {
              key: 'category',
              icon: <BiCategory />,
              label: 'Category',
            },
            {
              key: 'add-category',
              icon: <BiCategory />,
              label: 'Add Category',
            },
            {
              key: 'color-list',
              icon: <BiColor />,
              label: 'Color List',
            },
            {
              key: 'add-color',
              icon: <BiColor />,
              label: 'Add Color',
            },
            
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className='d-flex justify-content-between ps-2 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
                <IoIosNotifications  className='fs-3'/>
                <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className='d-flex gap-2 align-items-center' dropdown>
                <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className='header-right-logo' src={HeaderImg} alt="" />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item py-1 mb-1" style={{height:"auto", lineHeight:"30px"}} href="/">Profile</a></li>
                    <li><a className="dropdown-item py-1 mb-1" style={{height:"auto", lineHeight:"30px"}} href="/">Inbox</a></li>
                    <li><a className="dropdown-item py-1 mb-1" style={{height:"auto", lineHeight:"30px"}} href="/">Settings</a></li>
                    <li><a className="dropdown-item py-1 mb-1" style={{height:"auto", lineHeight:"30px"}} href="/">Sign Out</a></li>
                </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;