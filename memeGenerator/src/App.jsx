import Header from "./components/Header"
import Main from "./components/Main"
export default function App() {
  return (
    <div className="font-sans text-neutral-200 grid grid-cols-main min-h-screen grid-rows-main">
      <Header/>
      <Main/>
    </div>
  )
}

