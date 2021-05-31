export default {
  setUser(state, payload) {
    state.currentUser = payload;
    state.isAutenticated = !!payload.jwt;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  logout(state) {
    state.currentUser = null;
  }
};
