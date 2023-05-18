import { ActionSheet, List, NavBar } from 'antd-mobile';
import React, { useState } from 'react';
import { history } from 'umi';

export default () => {
    const [visible, setVisible] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('userInfo') as string) || {};
    const actions = [{ text: '退出', key: 'logout', danger: true }];
    const handleAction = (action: any) => {
        let { key } = action;
        if (key === 'logout') {
            localStorage.removeItem('token');
            localStorage.clear()
			
            history.push(`/login`);
        }
        setVisible(false);
    };
    return (
        <div style={{ height: '100vh', backgroundColor: '#F4F4F4' }}>
            <div style={{ backgroundColor: '#fff' }}>
                <NavBar
                    onBack={() => {
                        history.push(`/center`);
                    }}
                >
                    {' '}
                    设置{' '}
                </NavBar>
            </div>
            <div style={{ height: 10 }}> </div>
            <List header="">
                <List.Item
                    onClick={() => {}}
                    arrow={false}
                    extra={userInfo.user_id}
                >
                    账号ID
                </List.Item>
                <List.Item onClick={() => {}}>修改密码</List.Item>
            </List>
            <div style={{ height: 10 }}> </div>
            <List header="">
                <List.Item onClick={() => {}}>隐私政策</List.Item>
                <List.Item onClick={() => {}}>用户协议</List.Item>
                <List.Item onClick={() => {}}>软件版本</List.Item>
                <List.Item
                    onClick={() => {
                        history.push(`/center/feedback`);
                    }}
                >
                    意见反馈
                </List.Item>
            </List>
            <div style={{ height: 10 }}> </div>
            <List header="">
                <List.Item onClick={() => {}}>注销账号</List.Item>
                <List.Item onClick={() => setVisible(true)}>退出登录</List.Item>
            </List>
            <div style={{ height: 10 }}> </div>
            <ActionSheet
                extra="是否退出"
                cancelText="取消"
                visible={visible}
                actions={actions}
                onAction={handleAction}
                onClose={() => setVisible(false)}
            />
        </div>
    );
};
