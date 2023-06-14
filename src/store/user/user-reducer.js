const INITIAL_STATE = {
  currentUser: null,
};

const ACTION_TYPES = {
    ADD_USER: 'add_user',
}

 export const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTION_TYPES.ADD_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
