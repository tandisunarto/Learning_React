function createStore(reducer: any) {
   let state = 0;

   const getState = () => (state);

   const dispatch = (action: any) => {
      state = reducer(state, action);
   }

   return {
      getState,
      dispatch
   }
}