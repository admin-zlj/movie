import { NavBar, List, IndexBar, Grid, Divider } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import { useEffect, useMemo } from 'react';
import { connect, useHistory } from 'umi';
import styles from './city.less';
//@ts-ignore
import {getCitys} from '../../api/index.js'
import { useRequest } from 'ahooks';

function City(props: any) {
    const history = useHistory();
	const { data:cData }:any = useRequest(getCitys);
	const citysData:any = useMemo(() => {
		console.log('data', cData?.citys)
		return cData?.citys ||[]
	}, [cData])

    const clickCity = (item: any) => {
        localStorage.setItem('cityname', item.name);
        localStorage.setItem('city_id', item.city_id);
        history.push('/cinema');
    };

    return (
        <div>
            <div
                className={styles.top}
                style={{
                    position: 'sticky',
                    backgroundColor: '#fff',
                }}
            >
                <NavBar
                    backArrow={<CloseOutline />}
                    onBack={() => {
                        // console.log('返回');
                        history.push('/cinema');
                    }}
                >
                    当前城市
                </NavBar>
            </div>

            <div style={{ height: 'calc(100vh - 45px)' }}>
                <IndexBar>
                    <IndexBar.Panel index={'#'}>
                        <Divider>热门城市</Divider>
                        <div style={{ padding: '0 30px' }}>
                            <Grid columns={3} gap={15}>
                                {citysData
                                    .filter((item: any) => item.isHot==='1')
                                    .map((item: any) => (
                                        <Grid.Item
                                            onClick={() => {
                                                clickCity(item);
                                            }}
                                            key={item.city_id}
                                        >
                                            <div
                                                className={
                                                    styles[
                                                        'grid-demo-item-block'
                                                    ]
                                                }
                                            >
                                                {item.name}
                                            </div>
                                        </Grid.Item>
                                    ))}
                            </Grid>
                        </div>
                        <Divider />
                    </IndexBar.Panel>
                    {filtercity(citysData).map((group: any) => {
                        const { title, items } = group;
                        return (
                            <IndexBar.Panel
                                index={title}
                                title={title}
                                key={title}
                            >
                                <List>
                                    {items.map((item: any) => (
                                        <List.Item
                                            arrow={false}
                                            onClick={() => {
                                                clickCity(item);
                                            }}
                                            key={item.city_id}
                                        >
                                            {item.name}
                                        </List.Item>
                                    ))}
                                </List>
                            </IndexBar.Panel>
                        );
                    })}
                </IndexBar>
            </div>
        </div>
    );
}
export default connect((state: any) => {
    return {
        cityList: state.city.cityList,
    };
})(City);

function filtercity(List: string[]) {
    let arr = [...Array(26).keys()].map((i) => String.fromCharCode(i + 65));
    let newlist: any = [];
    // console.log(arr);
    arr.forEach((i) => {
        let nlist = List.filter(
            (city: any) => city.pinyin.substring(0, 1).toUpperCase() === i,
        );
        {
            nlist.length &&
                newlist.push({
                    title: i,
                    items: List.filter(
                        (city: any) =>
                            city.pinyin.substring(0, 1).toUpperCase() === i,
                    ),
                });
        }
    });

    return newlist;
}
