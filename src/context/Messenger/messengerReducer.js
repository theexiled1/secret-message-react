export default (state, action) => {
  switch (action.type) {
    case 'ENCRYPT_MESSAGE':
      return {
        ...state,
        message: btoa(action.payload)
      };
    default:
      return state;
  }
};
