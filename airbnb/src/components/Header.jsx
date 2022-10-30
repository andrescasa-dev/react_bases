import logo from '../assets/logo.svg';

export default function Header(){
  return (
    <header className='p-6 shadow-header'>
      <img src={logo} alt="Airbnb log" />
    </header>
  )
}