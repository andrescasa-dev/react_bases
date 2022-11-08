import arrow from "../assets/arrow.svg"

export default function MemeSlider({src}){
  return (
    <div className="flex gap-8 justify-center md:mt-4">
      <button className="hidden self-start mt-48 md:block"><img src={arrow} alt="previous" /></button>
      <img className="md:w-full w-3/4" src="https://i.imgflip.com/1g8my4.jpg" alt="meme" />
      <button className="hidden self-start mt-48 md:block"><img className="rotate-180" src={arrow} alt="next" /></button>
    </div>
  )
}