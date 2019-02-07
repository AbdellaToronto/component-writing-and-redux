import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const userList = [
  {name: 'John', data: 'Some random data here'},
  {name: 'Jacob', data: 'His name'},
  {name: 'JingleHeimer', data: 'was my'},
  {name: 'Schmidt', data: 'name too'},
  ];

const reducers = combineReducers({
  mainUser: (state = {name: 'Della', data: 'Some random data here'}) => state,
  otherUsers: (state = userList, action) => {

    switch(action.type) {
      case 'DELETE':
        return state.filter(u => u.name !== action.payload.name);
      default:
        return state;
    }
  }
});

export const store = createStore(reducers, applyMiddleware(logger));
