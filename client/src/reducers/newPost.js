const INITIAL_STORE = {
  form: {
    resourceAuthor: "",
    authorSkillLevel: "",
    cohort: "",
    title: "",
    categories: "",
    summary: "",
    link: "",
    resourceType: "",
    datePublished: "",
    videoLength: "",
    timeToComplete: "",
  },
  loading: false,
  errors: {},
};
export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...store,
        form: {
          ...store.form,
          [action.payload.field]: action.payload.value,
        },
      };
    case SUMBIT_FORM:
      return {
        ...store,
        loading: true,
        errors: {},
      };
    case FAILURE_FORM:
      return {
        ...store,
        loading: false,
        errors: action.payload,
      };
    case SUCCESS_FORM:
      return {
        ...INITIAL_STORE,
      };
    default:
      return store;
  }
};
