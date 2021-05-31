import axios from "../../utils/axios";
import router from "../../routes/index";
export default {
  /**
   *
   * @param {payload} user identiity to login into system
   */
  async login({ commit }, payload) {
    try {
      commit("setLoading", true);
      const { data } = await axios.post("/auth/local", payload);
      commit("setUser", data);
      localStorage.setItem("userToken", JSON.stringify(data));
      commit("setLoading", false);
      router.push("/dashboard");
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  },
  /**
   *
   * @param {payload} user object to save new record
   */
  async register({ commit }, payload) {
    try {
      commit("setLoading", true);
      const { data } = await axios.post("/auth/local/register", payload);
      commit("setUser", data);
      commit("setLoading", false);
      localStorage.setItem("userToken", JSON.stringify(data));
      router.push("/dashboard");
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  },

  async tryLogin({ commit }, payload) {
    try {
      commit("setLoading", true);
      commit("setUser", payload);
      commit("setLoading", false);
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  },

  async logout({ commit }) {
    try {
      commit("setLoading", true);
      commit("logout");
      localStorage.removeItem("userToken");
      commit("setLoading", false);
      router.push("/login");
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  }
};
