import {createStore} from 'redux'

const counterState = {
    total: 20,
}

const countReducer = (state = counterState) => { 
return state
}

const store = createStore(countReducer)

export default store