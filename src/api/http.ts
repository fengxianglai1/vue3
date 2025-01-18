import axios from "axios";

const service = axios.create({timeout:60000});
service.defaults.headers["Content-Type"] = 'application/json;charset-Utf-8';

service.interceptors.request.use((request:any)=>{
	console.log('请求体',request)
    //接口loading
    if(request.url.indexOf("gettoken")<0){//不是登录接口
        //有token 设置token
        if(localStorage['token']){
            request.headers['token'] = localStorage['token']
        }
    }
    return request;
})

service.interceptors.response.use((response:any)=>{
	console.log('response',response)
    if(response.data.code===0){//正常返回

    }else if(response.data.code==='666'){//token失效
        localStorage.clear();
    }else{//错误返回
    }
    return response.data;
},error=>{
    return {
        code:404
    }
})


export default service;