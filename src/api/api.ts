import http from './http';

const api ={
    getToken:function(params){
        
        console.log('params',params)
        http.post('/api/geToken',params)
    },
    getHome:function(){
        console.log('我来了')
        http.get('api/other')
    }
}

export default api;