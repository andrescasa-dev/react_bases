import arrow from '../assets/arrow.svg'
import random from '../assets/random.svg'

export default function SlideButton(){
  return (
      <div className="flex justify-between py-2 px-4 bg-white shadow-md rounded-md">
        <button className="pr-4 border-r-2 border-main">
          <img className='w-4/6' src={arrow} alt="prev image" />
        </button>
        <button className='grow flex justify-center'>
          <img src={random} alt="random image" />
        </button>
        <button className="pl-4 border-l-2 border-main">
          <img className='w-4/6 rotate-180' src={arrow} alt="prev image" />
        </button>
      </div>
  )
}