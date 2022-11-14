import Header from "./assets/Header"
import PlayGround from "./assets/PlayGround"

export default function App() {
  return (
    <div className="grid gap-8 col-start-2 col-end-[-2] p-10 bg-gray-200 rounded-lg font-karla text-2xl">
      <Header/>
      <PlayGround/>
    </div>
  )
}

