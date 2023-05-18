//@ts-nocheck
import { Form, Input, Button, Toast } from 'antd-mobile';
import { userRegister } from '../../api/index.js';
import { history } from 'umi';
import styles from './register.less';
import { isPhoneNumber } from '@/util/index.js';

function register(props: any) {
    const onFinish = async (values: any) => {
		if(!isPhoneNumber(values.username)){
			Toast.show({
                content: '请输入正确的手机号',
                duration: 1000,
            });
			return
		}
        let res = await userRegister({
            phone: values.username,
            password: values.password,
        });
        console.log('res', res);
        if (res.msg === '用户已注册') {
            Toast.show({
                content: '用户已注册',
                duration: 1000,
                maskClickable: false,
            });
        } else if (res.msg === '注册成功') {
            Toast.show({
                icon: 'success',
                content: '注册成功',
                maskClickable: false,
            });
            history.push('/login');
        }
    };

    return (
        <div className={styles.content}>
            <div className={styles.logo}>
                <img
                    src="https://img.alicdn.com/imgextra/i3/O1CN01eBiy611b67KLFOxi3_!!6000000003415-2-tps-200-200.png"
                    alt="logo"
                />
            </div>
            <div className="login">
                <Form
                    layout="horizontal"
                    onFinish={onFinish}
                    footer={
                        <>
                            <div className={styles.box}></div>
                            <Button
                                color="primary"
                                type="submit"
                                block
                                shape="rounded"
                                size="large"
                            >
                                注册
                            </Button>
                        </>
                    }
                >
                    <Form.Item
                        label="手机号"
                        name="username"
                        rules={[{ required: true, message: '手机号不能为空!' }]}
                    >
                        <Input placeholder="请输入手机号" clearable />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '密码不能为空!' }]}
                    >
                        <Input
                            placeholder="请输入密码"
                            clearable
                            type="password"
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default register;
