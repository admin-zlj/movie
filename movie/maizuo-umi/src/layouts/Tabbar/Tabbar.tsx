import { TabBar } from 'antd-mobile';
import { useHistory, useLocation } from 'umi';
import './Tabbar.css';
import {
    CollectMoneyOutline,
    MovieOutline,
    UserOutline,
	CouponOutline
} from 'antd-mobile-icons';
import { isLogin } from '@/wrappers/LoginAuth';

export default function Tabbar() {
    const history = useHistory();
    const location = useLocation();

    // console.log(location.pathname);

    const tabs = [
        {
            key: '/film',
            title: '电影',
            icon: <MovieOutline />,
        },
        {
            key: '/cinema',
            title: '影院',
            icon: <CollectMoneyOutline />,
        },
		{
            key: '/order',
            title: '订单',
            icon: <CouponOutline />,
        },

        {
            key: '/center',
            title: '我的',
            icon: <UserOutline />,
        },
    ];
    return (
        <footer>
            <TabBar
                activeKey={'/' + location.pathname.split('/')[1]}
                onChange={(value) => {
					if(['/order','/center'].includes(value)){
						if (isLogin()) {
							history.push(value);
						}
					}else{
						history.push(value);
					}
                }}
            >
                {tabs.map((item) => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </TabBar>
        </footer>
    );
}
