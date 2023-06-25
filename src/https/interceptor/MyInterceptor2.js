import axios from 'axios';

export function MyInterceptor2()
{
    axios.interceptors.request.use((res)=>{
        return res;
    },(err)=>{
        // alert('hhhh');
        if( err.response.status === 404 ) {
           throw new Error(`${err.config.url} not Found` )
        }
        throw err;
    })
}
