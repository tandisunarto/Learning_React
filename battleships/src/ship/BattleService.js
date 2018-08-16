const CellNotAttacked = (cell) => {
   return cell.status === "W" || cell.status === "S";
}

const ProcessCellStatus = (status) => {
   return (status === "W") ? "M" : "H";
}

export {
   CellNotAttacked,
   ProcessCellStatus
}
