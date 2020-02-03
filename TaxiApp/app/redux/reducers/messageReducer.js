import {SEND_MESSAGE} from "../actions/types"
import {CHANGE_MESSAGE} from "../actions/types"
const initialState={
    chatMessage:"",
    chatMessages:[]
}

const messageReducer=(state=initialState,action)=>{
    switch(action.type){
        case SEND_MESSAGE:
            return {...state,chatMessages:action.payload};
        case CHANGE_MESSAGE:
            return {chatMessage:action.payload};
        default:
            return state;
    }
};

export default messageReducer;