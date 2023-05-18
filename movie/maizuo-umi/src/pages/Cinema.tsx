import { useRequest } from 'ahooks';
import { NavBar, Space, List, Toast, DotLoading } from 'antd-mobile';
import { SearchOutline, DownOutline } from 'antd-mobile-icons';
import { useEffect, useMemo, useState } from 'react';
import { connect, useHistory } from 'umi';
//@ts-ignore
import { getCinemsByCityId } from '../api/index.js';


function Cinema(props: any) {
    const history = useHistory();
    const { data, loading }: any = useRequest(getCinemsByCityId, {
        loadingDelay: 100,
    });
    const [pageLoading, setPageLoading] = useState(true);

    const cinemsData: any = useMemo(() => {
        // console.log('cinemsData', data?.cinemas);
        return data?.cinemas || [];
    }, [data]);

    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 800);

        return () => {};
    }, []);

    const right = (
        <div
            onClick={() => {
                history.push('/search');
            }}
            style={{ fontSize: 24 }}
        >
            <Space style={{ '--gap': '16px' }}>
                <SearchOutline />
            </Space>
        </div>
    );
    const left = (
        <div
            onClick={() => {
                history.push('/city');
            }}
            style={{ fontSize: 12 }}
        >
            {localStorage.getItem('cityname')
                ? localStorage.getItem('cityname')
                : props.cityname}{' '}
            <i></i>
            <DownOutline />
        </div>
    );

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
                {' '}
                <NavBar right={right} back={null} left={left}>
                    影院
                </NavBar>
            </div>
            {pageLoading ? (
                <div
                    style={{ fontSize: 15, color: 'gray', textAlign: 'center' ,marginTop:50}}
                >
                    {' '}
                    加载中 <DotLoading />{' '}
                </div>
            ) : (
                <List>
                    {cinemsData.map((item: any) => (
                        <List.Item
                            arrow={false}
                            key={item.cinema_id}
                            description={description(item.address)}
                            extra={extra(item.lowPrice || 4100)}
                            onClick={handleListClick}
                        >
                            {children(item.name)}
                        </List.Item>
                    ))}
                </List>
            )}
        </div>
    );
}

export default connect((state: any) => {
    return {
        loading: state.loading.global,
        cinemaList: state.cinema.cinemaList,
        cityname: state.city.cityname,
        cityId: state.city.cityId,
    };
})(Cinema);

const handleListClick = () =>
    Toast.show({
        content: '暂未开放',
        maskClickable: false,
    });

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
