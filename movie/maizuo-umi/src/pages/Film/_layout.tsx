import { useLocation, Redirect, history } from 'umi';
//@ts-ignore
import { getHotMovie } from '../../api/index.js';
import { Image, Swiper, Tabs } from 'antd-mobile';
import { useMemo } from 'react';
import { useRequest } from 'ahooks';

export default function Film(props: any) {
    const location = useLocation();
    const { data, error, loading } = useRequest(getHotMovie);
    const lunboData: any = useMemo(() => data || [], [data]);

    if (location.pathname === '/film' || location.pathname === '/film/') {
        return <Redirect to="/film/nowPlaying" />;
    }
    return (
        <div>
            <Swiper autoplay loop>
                {lunboData.map((item: any) => (
                    <Swiper.Item key={item.movie_id}>
                        <div
                            onClick={() => {
                                history.push(`/detail/${item.movie_id}`);
                            }}
                        >
                            <img
                                style={{ width: '100%', height: 200 }}
                                src={item.poster}
                                alt={item.name}
                            />
                        </div>
                    </Swiper.Item>
                ))}
            </Swiper>
            <div
                style={{
                    height: 45,
                    position: 'sticky',
                    top: 0,
                    backgroundColor: '#fff',
                    zIndex: 999,
                }}
            >
                <Tabs
                    activeKey={location.pathname}
                    onChange={(value) => {
                        history.push(value);
                    }}
                >
                    <Tabs.Tab
                        title="正在热映"
                        key="/film/nowPlaying"
                    ></Tabs.Tab>
                    <Tabs.Tab
                        title="即将上映"
                        key="/film/comingSoon"
                    ></Tabs.Tab>
                </Tabs>
            </div>
            {props.children}
        </div>
    );
}
