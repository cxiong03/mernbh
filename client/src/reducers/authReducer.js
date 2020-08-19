const INITIAL_STATE = {
  email: "",
  password: "",
};

dispatchEvent({
  type: "authUpdate",
  payload: { field: "email", value: "cl" },
});

//Action handler
//if state is empty feed in INITIAL_STATE
export default (state = INITIAL_STATE, action) => {
  console.log("authReducer", action.type);
  //we always do two things to an action 1. type 2. payload
  switch (action.type) {
    case "authUpdate":
      console.log("authReducer authUpdate");
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      console.log("authReducer type didt change");
      return state;
  }
};
