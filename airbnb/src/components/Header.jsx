import logo from '../assets/logo.svg';

export default function Header(){
  return (
    <header className='grid grid-cols-main py-6 shadow-header col-start-1 col-end-4 '>
      <img className='col-start-2' src={logo} alt="Airbnb log" />
    </header>
  )
}