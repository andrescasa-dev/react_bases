export default function Button({icon, alt}){
  return (
    <li className="rounded-sm px-2 bg-accent">
      <button className="w-full h-full p-2 flex justify-center">
        <img className="" src={icon} alt={alt} />
      </button>
    </li>
  )
}