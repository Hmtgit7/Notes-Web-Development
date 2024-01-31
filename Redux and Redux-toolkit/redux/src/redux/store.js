import {createStore} from 'redux';


const reducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREAMENT':
            return state+1;
        case 'DECREAMENT':
            return state-1;
        default:
            return state;
    }
}

export const store=createStore(reducer);