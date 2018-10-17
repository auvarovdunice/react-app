import immutable from 'seamless-immutable';

export const actionTypes = {};

const initialState = immutable({});

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};