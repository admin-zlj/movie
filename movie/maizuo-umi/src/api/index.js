import { Dialog, Toast } from 'antd-mobile';
import axios from 'axios';
import { sleep } from '../util';

const apiMAp = {
    accUser: '/accUser',
    regUser: '/regUser',
    films: '/films',
    nowPlaying: '/films/nowPlaying',
    upComing: '/films/upComing',
    detail: '/films/detail',
    citys: '/citys',
    getCinems: '/cinema/getCinemaById',
    feedback: '/feedback',
    generate: '/order/generate',
    getOrder: '/order/queryOrder',
    updateOrder: '/order/updateOrder',
};
const BASE_URL = 'http://127.0.0.1:4000';
axios.interceptors.request.use((request) => {
    const token = window.localStorage.getItem('token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const errRes = error.response;
        if (errRes.status === 401) {
            console.log('登录失效');
            window.localStorage.removeItem('token');
            await Dialog.alert({
                content: '登录失效',
                confirmText: '去登录',
            });
            location.href = 'http://localhost:8000/login';
        }
        return Promise.reject(error.message);
    },
);

export async function userLogin(params) {
    let res = await axios.request({
        url: BASE_URL + apiMAp.accUser,
        params,
    });
    return res.data;
}

export async function userRegister(params) {
    console.log('params', params);
    let res = await axios.request({
        url: BASE_URL + apiMAp.regUser,
        params,
    });
    return res.data;
}

export async function getHotMovie() {
    let res = await axios.request({
        url: BASE_URL + apiMAp.films,
        params: {
            isHot: true,
        },
    });

    return res.data.data.films;
}

export async function getCitys() {
    let res = await axios.request({
        url: BASE_URL + apiMAp.citys,
    });

    return res.data.data;
}

export async function getCinemsByCityId() {
    let res = await axios.request({
        url: BASE_URL + apiMAp.getCinems,
        params: {
            city_id: localStorage.getItem('city_id') || 110100,
        },
    });
    return res.data.data;
}

export async function getNowPlaying(params) {
    await sleep(800);
    let res = await axios.request({
        url: BASE_URL + apiMAp.nowPlaying,
        params: {
            limt: 10,
            offset: 0,
            ...params,
        },
    });
    return res.data.data;
}

export async function getUpComing(params) {
    await sleep(800);
    let res = await axios.request({
        url: BASE_URL + apiMAp.upComing,
        params: {
            limt: 10,
            offset: 0,
            ...params,
        },
    });
    return res.data.data;
}

export async function getDetailById(id) {
    let res = await axios.request({
        url: BASE_URL + apiMAp.detail,
        params: {
            id,
        },
    });
    return res.data.data;
}

export async function submitFeedBack(params) {
    let res = await axios.request({
        url: BASE_URL + apiMAp.feedback,
        params: {
            ...params,
            user_id: JSON.parse(localStorage.getItem('userInfo')).user_id,
        },
    });
    return res.data.data;
}

export async function generateOrder(params) {
    let res = await axios.request({
        url: BASE_URL + apiMAp.generate,
        params: {
            ...params,
            user_id: JSON.parse(localStorage.getItem('userInfo')).user_id,
        },
    });
    return res.data.data;
}

export async function getOrderList() {
    let res = await axios.request({
        url: BASE_URL + apiMAp.getOrder,
        params: {
            user_id: JSON.parse(localStorage.getItem('userInfo')).user_id,
        },
    });
    return res.data.orders;
}

export async function updateOrder(params) {
    let res = await axios.request({
        url: BASE_URL + apiMAp.updateOrder,
        params: {
            ...params,
        },
    });
    return res.data;
}
