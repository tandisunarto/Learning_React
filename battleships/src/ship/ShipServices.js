import Ships from './Ships';

const GenerateShips = (zone) => {
   Ships.forEach(ship => {
      PlaceShipInZone(ship, zone);
   });
}

const PlaceShipInZone = (ship, zone) => {
   let row = 0;
   let col = 0;
   let orientation = Math.round(Math.random()) === 0 ? "H" : "V";

   let available = false;
   do {
      if (orientation === 'V') {
         row = GetStartPos(ship.length);
         col = Math.floor(Math.random() * 10);
      } else {
         col = GetStartPos(ship.length);
         row = Math.floor(Math.random() * 10);
      }      
      available = CheckAvailableCells(zone, row, col, ship.length, orientation);
   } while (available === false)

   // console.log(ship, row, col, orientation);
   for (let i = 0; i < ship.length; i++) {
      zone[row][col] = {
         status: "S",
         orientation: orientation,
         index: i + 1,
         length: ship.length
      }

      orientation === "H" ? col++ : row++;
   }
}

const GetStartPos = (length) => {
   let pos = 0;
   do {
       pos = Math.floor(Math.random() * 10);
   } while (pos > (9 - length))
   return pos;
}

const CheckAvailableCells = (zone, row, col, length, orientation) => {
   let available = true;
   let cellRow = row;
   let cellCol = col;
   for(let i = 0; i < length; i++){
       if (zone[cellRow][cellCol].status === 'S') {
           available = false;
           break;
       }
       (orientation === "H") ? cellCol++ : cellRow++;
   }

   return available;
}

export {
   GenerateShips
}