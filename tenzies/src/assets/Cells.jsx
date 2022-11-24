
function Cells ({ number, isFrozen, handleClick, id }) {
  const styles = 'bg-white rounded-md px-4 py-2 shadow-lg text-center font-bold '
  return (
    <button onClick={() => handleClick(id)} className={isFrozen ? styles + 'bg-accent' : styles}>
      <p>{number}</p>
    </button>
  )
}

export default Cells
