import arrow from "../assets/arrow.svg"

export default function MemeSlider({src}){
  return (
    <div className="flex gap-8 justify-center md:mt-4 relative">
      <button className="hidden self-start mt-48 md:block"><img src={arrow} alt="previous" /></button>
      <input className="text-stroke absolute top-9 font-meme text-5xl font-bold text-white bg-transparent outline-none placeholder-white text-center" type="text" placeholder="Write something" />
      <img className="md:w-full w-3/4" src="https://i.imgflip.com/1g8my4.jpg" alt="meme" />
      <input className="text-stroke absolute bottom-9 font-meme text-5xl font-bold text-white bg-transparent outline-none placeholder-white text-center" type="text" placeholder="Write something" />
      <button className="hidden self-start mt-48 md:block"><img className="rotate-180" src={arrow} alt="next" /></button>
    </div>
  )
}