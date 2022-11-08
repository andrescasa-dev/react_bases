import logo from '../assets/Logo.svg'

export default function Header(){
  return (
    <header className='flex items-center gap-2 justify-between bg-gradient-to-t from-main to-back p-4 col-span-4 md:col-start-2 md:col-end-3'>
      <div className='flex gap-2 '>
        <img src={logo} alt="meme generator"/>
        <h1 className='text-xl font-bold underline underline-offset-4 decoration-2 decoration-accent'>Meme Generator</h1>
      </div>
      <p>React bases project-3</p>  
    </header>
  )
}