import { useState } from "react";
import Cells from "./Cells";
import Button from "./Button";

function PlayGround(props) {
  const randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
  const CELLS_QUANTITY = 10

  const createCells = ()=>{
    let cells = [];
    for (let i = 0; i < CELLS_QUANTITY; i++) {
      cells.push(<Cells number={randomNumber(1,10)} isFrozen={true} />)
    }
    return cells
  }

  const [cells, setCells] = useState(createCells())

  return (
    <div className="grid justify-center">
      <div className="grid grid-cols-5 gap-2 justify-items-center w-fit">
        {cells}
      </div>
      
      
      {/* {implements btn logic} */}
      <Button>Roll</Button>
    </div>
  );
}

export default PlayGround;