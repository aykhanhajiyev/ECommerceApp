import {createStore, combineReducers} from 'redux';

import {
  MODULE_NAME as categoriesModuleName,
  reducer as categoriesReducer,
} from './categories';
import {
  MODULE_NAME as productsModuleName,
  reducer as productsReducer,
} from './products';

const rootReducer = combineReducers({
  [categoriesModuleName]: categoriesReducer,
  [productsModuleName]: productsReducer,
});

const store = createStore(rootReducer);

export default store;
