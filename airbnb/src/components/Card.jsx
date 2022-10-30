export default function Card({children, title, openSpots,price, location, coverImg}){
  const tagText = (openSpots === 0 && 'SOLD OUT') || (location === 'Online' && 'ONLINE')
  return (
    <div className="relative font-sans font-light w-[15rem] ">
      {tagText && <div className="absolute tag top-2 left-2 bg-white p-1 rounded-md font-normal">{tagText}</div>}
      <img className='w-full object-cover rounded-lg' src={`http://localhost:5173/src/data/img/${coverImg}`} alt="swimmer"></img>
      {children}
      <p>{title}</p>
      <p><span className="font-semibold">From ${price}</span> / person</p>
    </div>
  )
}