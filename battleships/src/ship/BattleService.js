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
   let shipDestroyed = false;
   let coordAccepted = false;
   let zone = [
      ...enemyZone,
   ]

   // check if selected cell has been attacked already
   if (CellNotAttacked(zone[coord.row][coord.col])) {
      // register ship hit or miss
      let attackedCell = zone[coord.row][coord.col];
      zone[coord.row][coord.col].status = (attackedCell.status === "W") ? "M" : "H";      
      shipDestroyed = IsShipDestroyed(zone, coord);
      coordAccepted = true;
   }

   return [zone, shipDestroyed, coordAccepted];
}

const AttackHomeZone = (zone) => {

    let shipDestroyed = false;
    let homeZone = [
        ...zone.homeZone
    ]
    let attackStatus = zone.enemyAttackStatus;

    /*
    if (lastAttackHit is a MISS and attack direction is not decided) 
        or
        (all attack direction stopped)
        RandomCoordToAttack
    else 
        switch (attack direction) {
            PerformAttack(direction)
        }
    */

    let [row, col] = [0, 0]
    if ((attackStatus.lastAttackHit === false && attackStatus.direction === "") // no hit and no attack direction
            || AllAttackDirectionStopped(attackStatus)) { // all attack directions have been targeted
        [row, col] = RandomCoordToAttack(homeZone);
    }
    else {
        CalculateDirectionToAttack(attackStatus);
        [row, col] = CalculateCoordToAttack(homeZone, attackStatus);
        console.log(attackStatus.direction, row, col);
    }

    let shipHit = homeZone[row][col].status === "S";   
    if (shipHit) {
        if (attackStatus.lastAttackRow !== -1 && attackStatus.lastAttackCol !== -1) {
            if (attackStatus.lastAttackRow === row)
                attackStatus.direction = "right"
            else if (attackStatus.lastAttackCol === col)
                attackStatus.direction = "up"
        }
    }
    attackStatus.lastAttackHit = shipHit;
    attackStatus.lastAttackRow = row;
    attackStatus.lastAttackCol = col;
    
    homeZone[row][col].status = shipHit ? "H" : "M";
    
    return [
        homeZone,
        attackStatus,
        shipDestroyed
    ]
}

const RandomCoordToAttack = (homeZone) => {
   let [row, col] = [0, 0];
   do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
   } while (homeZone[row][col].status !== "W" && homeZone[row][col].status !== "S")
   return [row, col]
}

const CalculateDirectionToAttack = (attackStatus) => {
    let direction = "";
    
    if (attackStatus.direction === "") {
        if (attackStatus.lastAttackRow > 0) {
            direction = "up";
        } else if (attackStatus.lastAttackRow === 0) {      
            direction = "down";
        } else if (attackStatus.lastAttackCol === 0) {
            direction = "right";
        } else if (attackStatus.lastAttackCol === 9) {
            direction = "left";
        }
    } else if (attackStatus.direction === "up") {
        if ((attackStatus.lastAttackRow === 0 || !attackStatus.lastAttackHit) && !attackStatus.stopDownAttack) {
            direction = "down";
            attackStatus.stopUpAttack = true;
        }
        else if (attackStatus.lastAttackHit)
            direction = "up";
    } else if (attackStatus.direction === "down") {
        if ((attackStatus.lastAttackRow === 9 || !attackStatus.lastAttackHit) && !attackStatus.stopUpAttack) {
            direction = "up";
            attackStatus.stopDownAttack = true;
        }
        else if (attackStatus.lastAttackHit)
            direction = "up";
    } else if (attackStatus.direction === "left") {
        if ((attackStatus.lastAttackCol === 0 || !attackStatus.lastAttackHit) && !attackStatus.stopRightAttack) {
            direction = "right";
            attackStatus.stopLeftAttack = true;
        }
        else if (attackStatus.lastAttackHit)
            direction = "left";
    } else if (attackStatus.direction === "right") {
        if ((attackStatus.lastAttackCol === 9 || !attackStatus.lastAttackHit) && !attackStatus.stopLeftAttack) {
            direction = "left";
            attackStatus.stopRightAttack = true;
        }
        else if (attackStatus.lastAttackHit)
            direction = "right";
    }

    attackStatus.direction = direction;
}

const CalculateCoordToAttack = (zone, attackStatus) => {
    console.log(`attack direction ${attackStatus.direction}`)
    let [row, col] = [attackStatus.lastAttackRow, attackStatus.lastAttackCol];

    switch(attackStatus.direction) {
        case "up": {
            do {
                row = row - 1;
            } while (zone[row][col].status !== "W")
            break;
        }
        case "down": {
            do {
                row = row + 1;
            } while (zone[row][col].status !== "W")
            break;
        }
        case "left": {
            do {
                col = col - 1;
            } while (zone[row][col].status !== "W")
            break;
        }
        case "right": {
            do {
                col = col + 1;
            } while (zone[row][col].status !== "W")
            break;
        }
    }

    return [row, col]
}

const AllAttackDirectionStopped = (attackStatus) => {
    return attackStatus.stopUpAttack &&
        attackStatus.stopDownAttack &&
        attackStatus.stopLeftAttack &&
        attackStatus.stopRightAttack;
}

export {
   AttackEnemyZone,
   AttackHomeZone
}
