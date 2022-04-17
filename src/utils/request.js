import axios from 'axios'
import Qs from 'qs'
import {localStorageGet} from '../store/localStorage'
import { useHistory } from "react-router-dom";


import { message } from  'antd'

// 支持跨域请求
axios.defaults.withCredentials = true

// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
})


// const instance=axios.create({
//     baseURL:'http://localhost:8101',
//     timeout:5000, //5秒
//     responseType: 'json',
//     headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//     }
// })

//全局请求之前执行
// instance.interceptors.request.use(function (config){
//     //加header
//     config.headers['token']='token';
//     return config;
// },function (error) {
//     return Promise.reject(error);
// });
//全局请求返回之后执行
// instance.interceptors.response.use(function (response) {
//     return response.data;
// },function (error) {
//     return Promise.reject(error);
// })


export function ajaxGet(url, params,options) {
    if (!options){
        options = {}
    }
    options.params = params || {}
    options.url = url
    options.method = 'get'
    return request(options)
}

export function ajaxPost(url, params, options) {
    if (!options){
        options = {}
    }
    options.method = 'post'
    options.url = url
    options.data = params
    options.transformRequest = [
        (data, headers) => {
            // Do whatever you want to transform the data
            return Qs.stringify(params)
        }
    ]
    return request(options)
}

export function ajaxFormPost(url, params, options) {
    if (!options){
        options = {}
    }
    let form =new FormData()
    for(let key  in params){
        // console.log(key + '---' + obj[key])
        form.append(key,params[key])
    }
    options.method = 'post'
    options.url = url
    options.data = form
    // options.transformRequest = [
    //     (data, headers) => {
    //         // Do whatever you want to transform the data
    //         return Qs.stringify(params)
    //     }
    // ]
    return request(options)
}

export function ajaxDownload(url, params, fileName) {
    axios({
        url: url,
        method: 'POST',
        responseType: 'blob', // important
        params: params || {}
    })
        .then((response) => {
            if (!fileName) {
                if (
                    response.headers['content-disposition'] &&
                    response.headers['content-disposition'].indexOf('filename=') !== -1
                ) {
                    fileName = response.headers['content-disposition'].split(
                        'filename='
                    )[1]
                } else if (response.headers.filename) {
                    fileName = response.headers.filename
                } else {
                    const d = new Date()
                    fileName =
                        '' +
                        d.getFullYear() +
                        d.getMonth() +
                        d.getHours() +
                        d.getMinutes() +
                        d.getSeconds()
                }
            }
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', fileName)
            document.body.appendChild(link)
            link.click()
        })
        .catch((error) => {
            console.log('下载文件异常')
        })
}

export function request(options) {
    //headers
    if (!options.headers){
        options.headers={}
    }
    // options.headers.delete("Content-Type")
    options.headers.token=localStorageGet("token")
    options.timeout = options.timeout || 30000
    options.async = options.async || true
    return axios(options).then(res=>{
        if(res.data && res.data.code===401){
            message.error('登录验证失败,请重新登录!');
            let history = useHistory();
            history.push("/");
            return
        }
        return res.data
    }).catch(err=>{
        console.log(err,"ererjakshfjd")
        return { data: [], msg: err, code: 500 }
    })
}