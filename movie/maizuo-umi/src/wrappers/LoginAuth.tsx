import { Dialog } from 'antd-mobile';
import { history, Redirect } from 'umi';
export default function LoginAuth(props: any) {
    if (localStorage.getItem('token')) {
        return <div>{props.children}</div>;
    }
    return <Redirect to="/login" />;
}

export function isLogin(){
	if (localStorage.getItem('token')) {
        return true;
    }
	Dialog.show({
		content: '请先登录',
		closeOnAction: true,
		actions: [
		  [
			{
			  key: 'cancel',
			  text: '取消',
			},
			{
			  key: 'login',
			  text: '去登录'
			},
		  ],
		],
		onAction:(action)=>{
			let { key } =action
			if(key === 'login'){
				history.push('/login')
			}
		}
	  })
    return false;
}