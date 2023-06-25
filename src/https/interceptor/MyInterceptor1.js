import axios from "axios";

export function MyInterceptor1()
{
    axios.interceptors.request.use((res)=>{
        res.headers['aaaaaaaaa'] = 'prem';
        console.log('Interceptor:' + res);
        return res; 
        // if(res?.data)
        // {
        //     return res.data;
        // } else {
        //     return res;
        // }
    })
}