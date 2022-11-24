import { useEffect, useState } from 'react'
import Cells from './Cells'
import Button from './Button'

function PlayGround () {
  const CELLS_QUANTITY = 10

  function randomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function freeze (cellId) {
    setCells((prevCells) => {
      return prevCells.map((cell) => {
        const { id, isFrozen } = cell.props
        return id === cellId ? <Cells {...cell.props} key={cell.key} isFrozen={!isFrozen}/> : cell
      })
    })
  }

  function createCells () {
    const cells = []
    for (let i = 0; i < CELLS_QUANTITY; i++) {
      cells.push(<Cells
        key={i}
        id={i}
        number={randomNumber(1, 10)}
        handleClick={freeze}
        isFrozen={false}
      />)
    }
    return cells
  }

  function playAgain () {
    setCells(createCells())
  }

  function roll () {
    setCells(prevCells => {
      return prevCells.map((cell) => {
        return cell.props.isFrozen ? cell : <Cells {...cell.props} key={cell.key} number={randomNumber(1, 10)} />
      })
    })
  }

  const [cells, setCells] = useState(() => createCells())
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const isGameOver = cells.every((cell, i, arr) => {
      const { isFrozen } = cell.props
      const equalNumber = cell.props.number === arr[0].props.number
      return isFrozen && equalNumber
    })

    setIsFinished(isGameOver)
  }, [cells])

  return (
    <div className="grid justify-center">
      <div className="grid grid-cols-5 gap-2 justify-items-center w-fit">
        {cells}
      </div>

      {/* {implements btn logic} */}
      {isFinished ? <Button handleClick={playAgain}>Play Again</Button> : <Button handleClick={roll}>Roll</Button>}
    </div>
  )
}

export default PlayGround
