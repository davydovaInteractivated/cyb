interface IReducer {
  state: any;
  action: any;
}

export const Reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
