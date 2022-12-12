import { createStore, createLogger } from "vuex";

const store = createStore({
    plugins: [createLogger()],
    state() {
        return {
            flag: false
        }
    }
})

export default store;