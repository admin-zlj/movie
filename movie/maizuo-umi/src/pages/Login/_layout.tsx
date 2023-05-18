//@ts-nocheck
import { Form, Input, Button, Toast } from 'antd-mobile';
import { userLogin } from '../../api/index.js';
import { history } from 'umi';
import styles from './login.less';
import { isPhoneNumber } from '@/util/index.js';

function Login(props: any) {
    const onFinish = async (values: any) => {
		console.log('first', isPhoneNumber(values.username))
		if(!isPhoneNumber(values.username)){
			Toast.show({
                content: '请输入正确的手机号',
                duration: 1000,
            });
			return
		}
        let res = await userLogin({
            phone: values.username,
            password: values.password,
        });
        if (res.msg === '登录成功') {
            Toast.show({
                icon: 'success',
                content: '登录成功',
                duration: 500,
                maskClickable: false,
            });
			localStorage.setItem('userInfo',JSON.stringify(res.userInfo))
            localStorage.setItem('token', res.userInfo.token);
            history.push('/center');
        } else {
            Toast.show({
                icon: 'fail',
                content: res.msg,
                maskClickable: false,
            });
        }
    };
    const goReg = () => {
        history.push('/register');
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
                                {' '}
                                登 录{' '}
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
                <div className={styles.reg} onClick={goReg}>
                    注册
                </div>
            </div>
        </div>
    );
}

export default Login;
