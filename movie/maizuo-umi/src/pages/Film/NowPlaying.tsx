import { useState } from 'react';
import { Image, List, InfiniteScroll } from 'antd-mobile';
import { connect } from 'umi';
import { useRequest } from 'ahooks';
//@ts-ignore
import { getNowPlaying } from '../../api/index.js';

function NowPlaying(props: any) {
    const { runAsync: getFilms, loading }: any = useRequest(
        async (params) => await getNowPlaying(params),
        {
            loadingDelay: 100,
            manual: true,
        },
    );

    const [filmsData, setFilmsData] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    async function loadMore() {
        const { films, total } = await getFilms({ offset: filmsData.length });
        //@ts-ignore
        setFilmsData((val) => [...val, ...films]);
        setHasMore(filmsData.length < total);
    }

    return (
        <div>
            <List>
                {filmsData.map((item: any) => (
                    <List.Item
                        onClick={() => {
                            props.history.push(`/detail/${item.movie_id}`);
                        }}
                        key={item.movie_id}
                        prefix={
                            <div style={{ padding: '10px 5px' }}>
                                <Image src={item.poster} width={70} />
                            </div>
                        }
                        description={description(item)}
                    >
                        <div
                            style={{
                                width: 200,
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {' '}
                            {item.name}{' '}
                        </div>
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    );
}
export default connect((state: any) => {
    return {
        nowplayingList: state.nowplaying.nowplayingList,
        hasMore: state.nowplaying.hasMore,
        cityId: state.city.cityId,
    };
})(NowPlaying);

const description = (item: any) => (
    <div>
        <div>
            {' '}
            观众评分：{' '}
            <div
                style={{
                    display: 'inline-block',
                    fontSize: '18px',
                    color: 'red',
                }}
            >
                {Number(item.grade).toFixed(1) || 7.5}
            </div>
        </div>
        <div
            style={{
                width: 200,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            }}
        >
            主演：
            {(item.actors || [])
                .map((item: any) => item.name + '  ')
                .toString()}
        </div>
        <div> {item.nation}</div>
    </div>
);
