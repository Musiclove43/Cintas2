/**
 * here is our protected store..
 * a place to store global/global items like
 * - user tokens
 * - user ids
 * - current account, etc.
 */
class ProtectedStore {
    /**
     * set the protected store key
     * @param key
     * @param value
     */
    set(key, value) {
        window.localStorage.setItem(key,JSON.stringify(value));
    }

    /**
     * set the key/value as a string
     * @param key
     * @param value
     */
    setString(key, value) {
        window.localStorage.setItem(key, value);
    }

    /**
     * retrieve the protected store key
     * @param key
     * @returns {any}
     */
    get(key) {
        // resolve the key
        let resolve = window.localStorage.getItem(key);

        try {
            return JSON.parse(resolve);
        } catch(e) {
            console.log("issue with unlocking protected store:", e);
            return resolve;
        }
    }
}

// export a NEW INSTANCE/ not just the class :)
export default new ProtectedStore();