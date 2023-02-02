import {createStore} from 'redux';

const reduxCounter = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if(action.type === "decrement"){
    return {
        counter: state.counter -1,
      };
  }

  return state;
};

const store = createStore(reduxCounter);

export default store;
