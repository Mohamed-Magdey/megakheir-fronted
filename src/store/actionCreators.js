import {LOAD_DATA} from './actionTypes';
import apiCall from '../services/api';


export const loadData = data => ({
    type: LOAD_DATA,
    data
});


export const fetchData = () => {
    return dispatch => {
        return apiCall("get", '/ngos/')
            .then(res => {
                    dispatch(loadData(res))
                }
            )
            .catch(err => {
                dispatch(Promise.reject(err));
            })
    }
}