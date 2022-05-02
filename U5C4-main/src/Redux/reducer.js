const init = {
   username: "",
   password: "",
   role: "",
};

export const reducer = (store = init, { type, payload }) => {
   switch (type) {
      case LOGIN:
         return {
            ...store,
            username: payload.username,
            password: payload.password,
            role: payload.role,
         };
      default:
         return store;
   }
};
