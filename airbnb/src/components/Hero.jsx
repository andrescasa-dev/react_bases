import imgHeroBig from "../assets/hero-big.png"
export default function Hero(){
  return (
    <section className="flex flex-col gap-3 py-6 col-start-2 md:items-center md:text-center">
      <img className="self-center" src={imgHeroBig} alt="hero image" />
      <h1 className="text-4xl font-bold">Online Experiences</h1>
      <p className="max-w-[70%] font-light md:max-w-md ">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}