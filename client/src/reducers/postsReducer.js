// import axios from "axios";

const INITIAL_STATE = {
  list: [],
  loading: false,
  errors: {},
};

export default (store = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POST":
      return {
        ...store,
        loading: true,
        errors: {},
      };
    case "SUCCESS":
      const posts = action.payload;
      return {
        ...store,
        list: [...store.list, ...posts],
        loading: false,
      };
    case "FAILED":
      return {
        ...store,
        errors: action.payload,
        loading: false,
      };
    default:
      return store;
  }
};

// const getPosts = () => async (dispatch) => {
//   try {
//     dispatch({ type: "GET_POST" });
//     const list = await axios.get("/api/posts");
//     dispatch({ type: "SUCCESS", payload: list });
//   } catch (error) {
//     dispatch({ type: "FAILED", payload: error });
//   }
// };
