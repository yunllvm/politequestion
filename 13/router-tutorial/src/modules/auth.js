import {createAction, handleActions} from 'redux-actions';


const TRUE_ACTION = 'auth/TRUE';
const FALSE_ACTION = 'auth/FALSE'; 

export const tact = createAction(TRUE_ACTION);
export const fact = createAction(FALSE_ACTION);

const initialState = {
    sign:false
};

const auth = handleActions(
    {
        [TRUE_ACTION]:()=>{
            return true;
        },
        [FALSE_ACTION]:()=>{
            return false;
        }
    },
    initialState
);

export default auth;