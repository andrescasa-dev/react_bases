import logo from '../assets/Logo.svg'

export default function Header(){
  return (
    <header className='flex flex-col gap-2 items-center bg-gradient-to-t to-back p-4 col-start-1 col-end-[-1]'>
      <div className='py-2 flex gap-2 items-center'>
        <img src={logo} alt="meme generator"/>
        <h1 className='text-xl font-bold text-third'>Quote builder</h1>
      </div>
      <div className='h-px w-[99%] bg-main opacity-50'></div>
    </header>
  )
}