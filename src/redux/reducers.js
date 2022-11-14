import { SET_USER_NAME, SET_USER_AGE, GET_MOVIES } from "./actions";

const initialState = {
    name:'',
    age:0,
    movies:[]
}

function rootReducer(state=initialState,action){
    switch(action.type){
        case SET_USER_AGE:{
            return {...state, age: action.payload};
        }
        case SET_USER_NAME:{
            return {...state, name: action.payload};
        }
        case GET_MOVIES:{
            return {...state, movies: action.payload}
        }
        default:{
            return state;
        }
    }
}

export default rootReducer;