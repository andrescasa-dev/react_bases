import imgHeroBig from "../assets/hero-big.png"
import imgHeroSmall from "../assets/hero-small.png"
export default function Hero(){
  return (
    <section className="flex flex-col gap-3 py-6 col-start-2 md:items-center md:text-center">
      <picture className="flex-shrink-0 self-center flex justify-center">
        <source srcSet={imgHeroBig} media="(min-width: 768px)"/>
        <img className="md:w-[60%] my-8 flex-shrink-0 flex-grow-0" src={imgHeroSmall} alt="hero" />
      </picture>
      <h1 className="text-4xl font-bold">Online Experiences</h1>
      <p className="max-w-[70%] font-light md:max-w-md ">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}