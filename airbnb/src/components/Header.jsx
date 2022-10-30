import logo from '../assets/logo.svg';

export default function Header(){
  return (
    <header className='p-6 shadow-header col-start-1 col-end-4 md:col-start-2 md:col-end-3'>
      <img src={logo} alt="Airbnb log" />
    </header>
  )
}