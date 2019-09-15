import types from './actionTypes'

function increment() {
  return {
    type: types.INCREMENT
  }
}

function decrement() {
  return {
    type: types.DECREMENT
  }
}

function setCount(amount: number) {
  return {
    type: types.SET_COUNT,
    payload: {amount}
  }
}

export {
  increment,
  decrement,
  setCount
}
