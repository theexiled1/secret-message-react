export default (state, action) => {
  switch (action.type) {
    case 'ENCRYPT_MESSAGE':
      return {
        ...state,
        message: btoa(action.payload)
      };
    case 'DECRYPT_MESSAGE':
      const { hash } = window.location;
      const message = hash.replace('#', '');
      return {
        ...state,
        message: atob(message)
      };
    default:
      return state;
  }
};
