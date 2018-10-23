import Vue from 'vue'



var Fly = require("flyio/dist/npm/wx")
var fly = new Fly;



//配置请求基地址
// //定义公共headers
//  fly.config.headers = { contentType : "application/json;charset=UTF-8"}
// //设置超时
//  fly.config.timeout=10000;
// //设置请求基地址
// fly.config.baseURL="https://wendux.github.io/"

//添加请求拦截器
fly.interceptors.request.use((config) => {
    //给所有请求添加自定义header
    // config.headers["content-type"] = "application/json;charset=UTF-8";
    // let token = wx.getStorageSync('token')
    // if (token) {
    //     config.headers["token"] = token;
    // }

    //打印出请求体
    // console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return config;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)
Vue.prototype.$http = fly //将fly实例挂在vue原型上

export default fly