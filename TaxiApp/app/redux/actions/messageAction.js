import {SEND_MESSAGE} from "./types"
import {CHANGE_MESSAGE} from "./types"
export const sendMessage=(msg)=>({
    type:SEND_MESSAGE,
    payload:msg
});
export const changeMessage=(msg)=>({
    type:CHANGE_MESSAGE,
    payload:msg
});
export const setMessage=(msg)=>{
    return dispatch=>{
        dispatch(changeMessage(msg));
    }
}
export const submitMessage=(msg)=>{
    return dispatch=>{
        dispatch(sendMessage(msg));
    }
}