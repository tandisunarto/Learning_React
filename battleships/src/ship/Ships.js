const Ships = [
   {
      type: 'carrier',
      length: 5,
      coordinates: [
         {row: 0, col: 0}, {row: 0, col: 0}, {row: 0, col: 0}, {row: 0, col: 0}, {row: 0, col: 0}
      ]
   },
   {
      type: 'battleship',
      length: 4,
      coordinates: [
         {row: 0, col: 0}, {row: 0, col: 0}, {row: 0, col: 0}, {row: 0, col: 0}
      ]
   },
   {
      type: 'cruiser',
      length: 3,
      coordinates: [
         {row: 0, col: 0}, {row: 0, col: 0}, {row: 0, col: 0}
      ]
   },
   {
      type: 'submarine',
      length: 3,
      coordinates: [
         {row: 0, col: 0}, {row: 0, col: 0}, {row: 0, col: 0}
      ]
   },
   {
      type: 'destroyer',
      length: 2,
      coordinates: [
         {row: 0, col: 0}, {row: 0, col: 0}
      ]
   }
]

export default Ships;