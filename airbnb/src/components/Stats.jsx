import star from '../assets/star.svg'

export default function Stats({rating, reviewCount}){
  return (
    <p className="flex items-center gap-1">
        <img src={star} alt="stars"></img>
        <span>{rating}</span>
        <span className="text-neutral-600">({reviewCount}) •USA</span>
    </p>
  )
}