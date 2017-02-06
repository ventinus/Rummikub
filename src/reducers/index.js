import { combineReducers } from 'redux';
import { routerReducer   }  from 'react-router-redux';

// import all reducers
import rummikub from './rummikub';

// export all reducers as one
const rootReducer = combineReducers({
  routing: routerReducer,
  rummikub
});

export default rootReducer;
