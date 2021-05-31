export default {
  user(state) {
    return state.currentUser;
  },
  isAuthenticated(state) {
    return state.currentUser;
  },
  loading(state) {
    return state.loading;
  },
  error(state) {
    return state.error;
  }
};
