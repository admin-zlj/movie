import { useState } from 'react';
import { Image, List, InfiniteScroll } from 'antd-mobile';
import { connect } from 'umi';
import { useRequest } from 'ahooks';
//@ts-ignore
import { getUpComing } from '../../api/index.js';

function ComingSoon(props: any) {
    const { runAsync: getFilms, loading }: any = useRequest(
        async (params) => await getUpComing(params),
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
        comingsoonList: state.comingsoon.comingsoonList,
        hasMore: state.comingsoon.hasMore,
        cityId: state.city.cityId,
    };
})(ComingSoon);

const description = (item: any) => (
    <div>
        <div
            style={{
                width: 200,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            }}
        >
            主演：{item.actors.map((item: any) => item.name + ' ').toString()}
        </div>
        <div>上映日期：{mydate(item.release_date)}</div>
        <div>{item.nation}</div>
    </div>
);
function mydate(str: number) {
    let date = new Date(str * 1000);
    let cdate = date.toLocaleDateString().split('/');
    let s = `${cdate[1]}月${cdate[2]}日`;
    return s;
}
