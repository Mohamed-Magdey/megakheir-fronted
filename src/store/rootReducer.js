import {LOAD_DATA} from './actionTypes';


const rootReducer = (state=[], action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {...state, ...action.data};
        default:
            return state;
    }
};

export default rootReducer;