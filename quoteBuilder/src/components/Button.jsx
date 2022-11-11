export default function Button({icon, alt, tailwind=[]}){
  const tailwindAll = [
    "w-full",
    "min-w-[4em]", 
    "h-full", 
    "p-2",
    "px-2", 

    "flex",
    "justify-center",
    "items-center",
    "rounded-md",

    "bg-accent",

    [...tailwind]
  ].join(" ")

  return (
      <button className={tailwindAll}>
        <img className="max-w-[55%] max-h-[55%] w-full" src={icon} alt={alt} />
      </button>
  )
}