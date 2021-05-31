import { createStore, createLogger } from "vuex";
import AuthModule from "./auth/index";
const store = createStore({
  plugins: [createLogger()],
  modules: {
    auth: AuthModule
  }
});
export default store;
