import http from './http';

const api ={
    admin:function(params){
        
        console.log('params',params)
        http.get('/api/portrait',params)
    },
    getHome:function(){
        console.log('我来了')
        http.get('api/other')
    }
}

export default api;