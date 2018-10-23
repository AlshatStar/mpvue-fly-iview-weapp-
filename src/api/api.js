import fly from './request'
import config from "./config";
import qs from 'qs'

const host = config.host;



// 通用的get请求
export const get = (params) => {
    return fly.get(`${host}${params.url}`, qs.stringify(params.data))
};

// 通用的post请求
export const post = (params) => {
    return fly.post(`${host}${params.url}`, JSON.stringify(params.data))
};