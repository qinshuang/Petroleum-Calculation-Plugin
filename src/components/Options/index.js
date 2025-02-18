import React , { useState,useEffect }from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import styled from 'styled-components';

const ContentStyledDiv = styled.div`
  min-height: ${(props) => `calc(${props.height}px - 112px)`};
  padding: 20px;
  transition: min-height 0.3s ease-in-out;
  background: rgb(255, 255, 255);
`;

export default function Options({ }) {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: 'rgb(255, 255, 255)',
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
            <Content
              style={{
                margin: '24px 16px',
              }}
            >
              <ContentStyledDiv height={windowHeight}>
                Content

              </ContentStyledDiv>
          </Content>
        </Layout>
      </Layout>
    );
  }
