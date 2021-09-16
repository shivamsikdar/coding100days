// Header file of my Img Gallary app using react
import React from "react";
import {Menu} from 'antd'

function AppHeader(){
    return (
        <div className="container-fluid">
            <div className ="header">
                <div className ="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"> Home</Menu.Item>
        <Menu.Item key="2"> Sign In</Menu.Item>
        <Menu.Item key="3"> Upload</Menu.Item>
        </Menu>
            </div>
        </div>
    );
}
export default AppHeader;