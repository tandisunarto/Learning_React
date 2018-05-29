class AppStore {
   private state = {
      number: 10
   };

   getState() {
      return this.state;
   }

   dispatch(action: any) {
      this.state = this.reducer(action);
   }

   private reducer(action: any) {
      if (action.type === "INC")
         return {number: this.state.number + 1};
      else if (action.type === "DEC")
         return {number: this.state.number - 1};
      else 
         return {number: this.state.number};
   }
}

export { AppStore };