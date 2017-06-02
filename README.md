# firing-up-react-redux-route

Steps to getting Redux working & capturing the input value

npm install -S redux react-redux redux-thunk

—Set up store.js:
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(
  applyMiddleware(...middleware),
));

export default store;

—Bring Provider into index.js:
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

—Set up an action in actions folder:
export const CAPTURE_INPUT = 'CAPTURE_INPUT';

export const captureInput = (data) => {
  return { type: CAPTURE_INPUT, data };
};

—Set up a root reducer in reducers folder in index.js:
import { combineReducers } from 'redux';
import input from './input';

const reducers = combineReducers({
  input,
});

export default reducers;

—Set up a reducer in input.js reducers folder:
const initialState = {
  inputText: '',
};

const inputText = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'CAPTURE_INPUT':
      return data;
    default:
      return state;
  }
};

export default inputText;

—connect component using mapstatetoprops & mapdispatchtoprops

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ captureInput }, dispatch);
