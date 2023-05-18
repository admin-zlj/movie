import { useRequest } from 'ahooks';
import { List, NavBar, Toast } from 'antd-mobile';
import { useMemo } from 'react';
import { history } from 'umi';
//@ts-ignore
import { getCinemsByCityId,generateOrder } from '../../../api/index.js';

function cinemas() {
    const { data, loading }: any = useRequest(getCinemsByCityId, {
        loadingDelay: 100,
    });
    const cinemsData: any = useMemo(() => {
        return data?.cinemas || [];
    }, [data]);

    return (
        <div>
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: '#fff',
                    zIndex: 999,
                }}
            >
                <NavBar
                    onBack={() => {
                        history.goBack();
                    }}
                >
                    选择影院
                </NavBar>
            </div>
            <List>
                {cinemsData.map((item: any) => (
                    <List.Item
                        arrow={false}
                        key={item.cinema_id}
                        description={description(item.address)}
                        extra={extra(item.lowPrice || 4100)}
                        onClick={() => {
                            handleListClick(item);
                        }}
                    >
                        {children(item.name)}
                    </List.Item>
                ))}
            </List>
        </div>
    );
}
cinemas.wrappers = ['@/wrappers/LoginAuth'];
export default cinemas;

const handleListClick = async (item: any) => {
	console.log('item', item,history)
	await generateOrder({
		movie_id:history.location.query?.id,
		cinema_id:item.cinema_id
	})
	Toast.show({
		icon: 'loading',
		duration:1000,
		afterClose:()=>{
			history.push('/order')
		}
	  })
};

const description = (address: string) => (
    <div
        style={{
            width: 220,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        }}
    >
        {address}
    </div>
);
const extra = (lowPrice: number) => (
    <div style={{ color: '#FF6565' }}>
        ￥{lowPrice / 100}
        <i style={{ fontSize: 12 }}>起</i>
    </div>
);
const children = (name: string) => (
    <div
        style={{
            fontSize: 16,
            width: 220,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        }}
    >
        {' '}
        {name}
    </div>
);
