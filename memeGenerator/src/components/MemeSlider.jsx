import arrow from "../assets/arrow.svg"

export default function MemeSlider({src, handleNext, handlePrev}){
  //https://i.imgflip.com/1g8my4.jpg
  return (
    <div className="md:w-[60&] w-[80%] flex gap-8 justify-center md:mt-4 relative">
      <button onClick={handlePrev} className="hidden self-start mt-48 md:block"><img src={arrow} alt="previous" /></button>
      <input className="text-stroke absolute top-9 font-meme text-5xl font-bold text-white bg-transparent outline-none placeholder-white text-center" type="text" placeholder="Write something" />
      <img className="md:w-1/2 w-3/4" src={src} alt="meme" />
      <input className="text-stroke absolute bottom-9 font-meme text-5xl font-bold text-white bg-transparent outline-none placeholder-white text-center" type="text" placeholder="Write something" />
      <button onClick={handleNext} className="hidden self-start mt-48 md:block"><img className="rotate-180" src={arrow} alt="next" /></button>
    </div>
  )
}