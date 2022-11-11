import arrow from '../assets/arrow.svg'
import random from '../assets/random.svg'

export default function SlideButton(){
  return (
      <div className="h-full flex justify-between p-4 bg-white shadow-md rounded-md">
        <button className="pr-4 border-r-2 border-main">
          <img className='max-w-[1em] aspect-square' src={arrow} alt="prev image" />
        </button>
        <button className='grow flex justify-center'>
          <img className='max-w-[2em] aspect-square ' src={random} alt="random image" />
        </button>
        <button className="pl-4 border-l-2 border-main">
          <img className='max-w-[1em] aspect-square rotate-180' src={arrow} alt="prev image" />
        </button>
      </div>
  )
}