import { createStore, applyMiddleware, compose } from 'redux';
import { dev, middleware, sagaMiddleWare } from '../middlewares';
import { rootReducer } from '../rootReducer';
import { rootSaga } from '../rootSaga';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const store = createStore(
  rootReducer(),
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleWare.run(rootSaga);

export { store };
