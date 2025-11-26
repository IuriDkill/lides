import { combineReducers } from 'redux'
import ModalReducer from './modalReducer'

const reducers = combineReducers({
    modal: ModalReducer
});

export { reducers };