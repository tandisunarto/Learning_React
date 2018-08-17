const CellNotAttacked = (cell) => {
   return cell.status === "W" || cell.status === "S";
}


const IsShipDestroyed = (zone, coord) => {
   let shipDestroyed = true;
   
   let cell = zone[coord.row][coord.col];
   if (cell.status === "M") {
      shipDestroyed = false;
   }   
   else {
      if (cell.orientation === "H") {
         for (let i = coord.col - cell.index + 1; i <= coord.col + cell.length - cell.index; i++) {
            if (zone[coord.row][i].status === "S") {
               shipDestroyed = false
            }
         }
      } else {
         for (let i = coord.row - cell.index + 1; i <= coord.row + cell.length - cell.index; i++) {
            if (zone[i][coord.col].status === "S") {
               shipDestroyed = false
            }
         }
      }
   }
   return shipDestroyed;
}

const AttackEnemyZone = (coord, enemyZone) => {

   let gameOver = false;
   let shipDestroyed = false;
   let zone = [
      ...enemyZone,
   ]

   // check if selected cell has been attacked already
   if (CellNotAttacked(zone[coord.row][coord.col])) {

      // register ship hit or miss
      let attackedCell = zone[coord.row][coord.col];
      zone[coord.row][coord.col].status = (attackedCell.status === "W") ? "M" : "H";      
      shipDestroyed = IsShipDestroyed(zone, coord);
   }

   return [
      zone,
      shipDestroyed
   ];
}

const AttackHomeZone = (homeZone) => {

   let shipDestroyed = false;
   let zone = [
      ...homeZone,
   ]

   // for testing, use random row and col
   let row = Math.floor(Math.random() * 10);
   let col = Math.floor(Math.random() * 10);
   zone[row][col].status = zone[row][col].status === "S" ? "H" : "M";

   return [
      zone,
      shipDestroyed
   ]
}

export {
   AttackEnemyZone,
   AttackHomeZone
}
