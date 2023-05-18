import React, { useEffect, useMemo, useRef, useState } from 'react';
import { connect, history, useRouteMatch } from 'umi';
import { Image, List, Button, ImageViewer } from 'antd-mobile';
import { LeftOutline, DownOutline, UpOutline } from 'antd-mobile-icons';
import styles from './detail.less';
//@ts-ignore
import { getDetailById } from '../../../api/index.js';
import { useRequest } from 'ahooks';
import { isLogin } from '@/wrappers/LoginAuth';

function Detail(props: any) {
    const [toggle, settoggle] = useState(true);
    const match: any = useRouteMatch();
    const {
        data: detailData,
        error,
        loading,
    } = useRequest(async () => {
        return await getDetailById(match.params.FilmId);
    });
    const detail: any = useMemo(() => detailData || {}, [detailData]);
    useEffect(() => {
        props.dispatch({
            type: 'detail/getFilm',
            payload: match.params.FilmId,
        });
        return () => {};
    }, []);
    const buyTicket = () => {
        if (isLogin()) {
            history.push(
                `/detail/${match.params.FilmId}/cinemas?id=${match.params.FilmId}`,
            );
        }
    };
    const clickPhoto = () => {
        ImageViewer.Multi.show({ images: detail.photos });
    };
    const description = (film: any) => (
        <div>
            <div className={styles.info}>{mydate(film.release_date)}上映</div>
            <div className={styles.info}>{film.nation}</div>
            {/* <div className={styles.info}>{film.category}</div> */}
            <div
                className={toggle ? styles.synopsisHidden : styles.synopsisShow}
                style={{
                    height: Math.ceil((film.synopsis?.length / 24) * 20) || 0,
                }}
            >
                {film.synopsis}
            </div>
            <div
                onClick={() => {
                    settoggle(!toggle);
                }}
                className={styles.toggle}
            >
                {' '}
                {toggle ? <DownOutline /> : <UpOutline />}
            </div>
        </div>
    );

    if (location.pathname.includes(`/detail/${match.params.FilmId}/cinemas`)) {
        return <div>{props.children}</div>;
    }
    return (
        <div>
            <div
                onClick={() => {
                    history.goBack();
                }}
                className={styles.back}
            >
                {' '}
                <LeftOutline />{' '}
            </div>
            <div className={styles.poster}>
                <Image
                    src={detail.poster}
                    width="100%"
                    height={200}
                    fit="cover"
                />
            </div>
            <div>
                <List>
                    <List.Item
                        key={detail.movie_id}
                        description={description(detail)}
                    >
                        <div className={styles.title}>
                            <div className={styles.name}>
                                <span> {detail.name} </span>
                            </div>
                            <div className={styles.grade}>{detail.grade}分</div>
                        </div>
                    </List.Item>
                </List>
            </div>
            <div style={{ height: '12px', backgroundColor: '#ededed' }}></div>
            <div className={styles.actors}>演职人员</div>
            <div className={styles.actorsImg}>
                <ul className={styles.ul}>
                    {detail.actors?.map((item: any) => (
                        <li key={item.name}>
                            <div>
                                <img src={item.imgUrl} alt={item.name} />
                            </div>
                            <span>{item.name}</span>
                            <span className={styles.role}>{item.role}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ height: '12px', backgroundColor: '#ededed' }}></div>
            <div className={styles.actors}>剧照</div>
            <div className={styles.photos}>
                <ul className={styles.ul} onClick={clickPhoto}>
                    {detail.photos?.map((item: any, index: any) => (
                        <li key={item}>
                            <div>
                                <img src={item} alt={item} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ height: 50 }}></div>
            <div className={styles.button}>
                <Button onClick={buyTicket} block color="primary" size="large">
                    {' '}
                    购票{' '}
                </Button>
            </div>
        </div>
    );
}
export default connect((state: any) => {
    return {
        film: state.detail.film,
    };
})(Detail);

//格式化后台传来的时间
function mydate(str: number) {
    let date = new Date(str * 1000);
    let cdate = date.toLocaleDateString().split('/');
    let s = `${cdate[0]}-${cdate[1]}-${cdate[2]}`;
    return s;
}
