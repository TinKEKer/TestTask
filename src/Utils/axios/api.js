import {AXIOS} from "./axios";

export const api = {
    getPhotos:(setLoading,...cbs)=>{
        AXIOS.get().then(({data})=>{
            cbs.map(cb=>{
                cb(data.slice(0,20))
                setLoading(false)
            })
        })}
}
