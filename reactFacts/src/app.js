const root = ReactDOM.createRoot(document.getElementById('root'))

function Navbar(){
  return (
      <header className="flex gap-8 items-center bg-gray-900 p-5 text-white" >
          <div className="flex gap-2">
            <img src="../assets/reactLogo.svg"></img>
            <h1 className="text-3xl bold cursor-pointer text-blue-300">ReactFacts</h1>
          </div>
          <ul className="flex gap-4">
              <li className="hover:text-yellow-800 cursor-pointer">Pricing</li>
              <li className="hover:text-yellow-800 cursor-pointer">About</li>
              <li className="hover:text-yellow-800 cursor-pointer">COntact</li>
          </ul>
      </header>
  )
}

function Main(){
  return (
    <main className="p-10 bg-[#282D35] text-white">
      <h1 className="text-4xl font-bold">Fun facts about React</h1>
      <ul className="text-xl m-6 text-red-500 list-disc ml-6">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

root.render(<Navbar/>);
root.render(<Main />);