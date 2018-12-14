import { combineReducers } from 'redux'

const  todos = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_NUM':
        return state++
      case 'DECREMENT_NUM':
        return state --
      default:
        return state
    }
  }
  
  export default combineReducers({
    todos
  })