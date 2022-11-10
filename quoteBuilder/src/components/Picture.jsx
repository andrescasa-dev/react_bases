export default function Picture({src, handleNext, handlePrev}){
  //https://i.imgflip.com/1g8my4.jpg

  const styles = {
    backgroundImage: `url(${src})`,
  }

  return (
    <div style={styles} className="flex flex-col justify-between py-20 px-10 md:mt-4 bg-cover w-full md:h-auto h-[80%] rounded-md md:aspect-[16/9] aspect-[4/5] ">
      <textarea className="flex-grow text-stroke text-2xl font-semibold text-white bg-transparent outline-none placeholder-white text-center" type="text" placeholder="Some large text" />
      <input className="self-stretch text-2xl font-bold text-neutral-400 bg-transparent outline-none placeholder-neutral-400" type="text" placeholder="Author" />
    </div>
  )
}