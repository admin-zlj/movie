import React, { useEffect, useMemo, useState } from 'react';
import { SearchBar, List, Toast, NavBar } from 'antd-mobile';
import { connect, useHistory } from 'umi';
//@ts-ignore
import { getCinemsByCityId } from '../api/index.js';
import { useRequest } from 'ahooks';

function Search(props: any) {
    const [text, setText] = useState('');
    const history = useHistory();
	
    const { data, loading }: any = useRequest(getCinemsByCityId, {
        loadingDelay: 100,
    });


    const cinemaList: any = useMemo(() => {
		if(!!text){
			const filterData =  data?.cinemas.filter(
                (item: any) =>
                    item.name.toUpperCase().includes(text.toUpperCase()) ||
                    item.address.toUpperCase().includes(text.toUpperCase()),
            )
			return  filterData
		}
        return data?.cinemas || [];
    }, [data,text]);


    return (
        <div>
			 <NavBar onBack={()=>{
				  history.goBack();
			 }}>
                    搜索
                </NavBar>
            <div
                style={{
                    padding: '10px 10px',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: '#fff',
                    zIndex: 999,
                }}
            >
                <SearchBar
                    value={text}
                    onChange={(value) => {
                
                        setText(value);
                    }}
                    onCancel={() => {
                        history.goBack();
                    }}
                    placeholder="请输入影院名称"
                    showCancelButton={() => true}
                />
            </div>
            <List>
                {cinemaList.map((item: any) => (
                    <List.Item
                        arrow={false}
                        key={item.cinema_id}
                        description={description(item.address)}
                        extra={extra(item.lowPrice ||4100)}
                        onClick={handleListClick}
                    >
                        {children(item.name)}
                    </List.Item>
                ))}
            </List>
        </div>
    );
}

export default connect((state: any) => {
    // console.log(state);
    return {
        loading: state.loading.global,
        cinemaList: state.cinema.cinemaList,
        // cityname: state.city.cityname,
        cityId: state.city.cityId,
    };
})(Search);

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
