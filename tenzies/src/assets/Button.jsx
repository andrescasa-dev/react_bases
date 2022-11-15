function Button({children, handleClick}) {
  return (
    <button onClick={handleClick} className="py-2 mt-8 px-12 rounded-md bg-blue-400 text-white font-bold shadow-sm ">
      {children}
    </button>
  );
}

export default Button;