import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signReducer from './sign'

const rootReducer = (history) => combineReducers({
    sign: signReducer,
    router: connectRouter(history)
})

export default rootReducer