import reactLogo from '../assets/react.svg'

export default function(){
  return (
    <header className="flex gap-8 items-center bg-[#21222A] p-5 text-white" >
        <div className="flex gap-2">
          <img src={reactLogo}></img>
          <h1 className="text-3xl bold cursor-pointer text-blue-300">ReactFacts</h1>
        </div>
        <ul className="flex gap-4">
            <li className="hover:text-blue-300 cursor-pointer"><a href="#">Pricing</a></li>
            <li className="hover:text-blue-300 cursor-pointer"><a href="#">About</a></li>
            <li className="hover:text-blue-300 cursor-pointer"><a href="#">COntact</a></li>
        </ul>
    </header>
  )
}