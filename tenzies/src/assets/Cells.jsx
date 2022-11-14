import React from 'react';

function Cells({number, isFrozen}) {
  const styles = 'bg-white rounded-md px-4 py-2 shadow-lg text-center font-bold '
  return (
    <button className={isFrozen ? styles+'bg-accent' : styles}>
      <p>{number}</p>
    </button>
  );
}

export default Cells;