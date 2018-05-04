const inc = { type : "INC" }
const dec = { type : "DEC" }

function reducer(state: number, action: any ) {
   if (action.type === "INC") {
      return state + 1;
   } else if (action.type === "DEC") {
      return state - 1;
   } else {
      return state;
   }
}

export { inc, dec, reducer }