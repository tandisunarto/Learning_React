const CellNotAttacked = (cell) => {
   return cell.status === "W" || cell.status === "S";
}


const IsShipDestroyed = () => {
   let shipDestroyed = false;

   return shipDestroyed;
}

const IsGameOver = () => {
   let gameOver = false;

   return gameOver;
}

const AttackEnemyZone = (coord, enemyZone) => {

   let gameOver = false;
   let shipDestroyed = false;
   let zone = [
      ...enemyZone,
   ]

   // check if selected cell has been attacked already
   if (CellNotAttacked(zone[coord.row][coord.col])) {
      let status = zone[coord.row][coord.col].status;
      if (status === "S") {
         shipDestroyed = IsShipDestroyed();
         if (shipDestroyed) {
            gameOver = IsGameOver();
         }
      }
      zone[coord.row][coord.col].status = (status === "W") ? "M" : "H";
   }

   return [
      zone,
      {
         shipDestroyed: shipDestroyed,
         gameOver: gameOver
      }
   ];
}

export {
   AttackEnemyZone
}
