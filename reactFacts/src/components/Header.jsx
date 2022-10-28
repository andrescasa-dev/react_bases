import reactLogo from '../assets/react.svg'

export default function(){
  return (
    <header className="col-start-2 flex flex-col sm:flex-row gap-8 items-center justify-between bg-primary p-5 text-neutral-50" >
        <div className="flex gap-2">
          <img src={reactLogo}></img>
          <h1 className="text-3xl bold cursor-pointer text-accent">ReactFacts</h1>
        </div>
        <ul className="flex gap-4 text-neutral-50">
            <li className="hover:text-blue-200 cursor-pointer"><a className="" href="#">Pricing</a></li>
            <li className="hover:text-blue-200 cursor-pointer"><a className="" href="#">About</a></li>
            <li className="hover:text-blue-200 cursor-pointer"><a className="" href="#">Contact</a></li>
        </ul>
    </header>
  )
}