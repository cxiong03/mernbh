import store from "../store";

const INITIAL_STATE = {
  query: {
    author: "",
    skillLevel: "",
    cohort: "",
    title: "",
    categories: "",
    summary: "",
    link: "",
    resourceType: [],
    publishedAt: 0,
    videoLength: 0,
    timeToComplete: 0,
    cost: 0,
  },
  loading: false,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_QUERY_FIELD":
      return {
        ...store,
        query: {
          ...store.query,
        },
      };
    case "SUBMIT_POST":
      return {
        ...state,
        errors: {},
        loading: true,
      };
  }
};
