export default function Button({icon, alt}){
  return (
    <li className="flex-grow rounded-sm bg-accent">
      <button className="w-full h-full p-2 flex justify-center">
        <img src={icon} alt={alt} />
      </button>
    </li>
  )
}