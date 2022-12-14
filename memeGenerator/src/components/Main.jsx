import {useState, useEffect} from "react";
import ToolBar from "./Toolbar"
import MemeSlider from "./MemeSlider"
import SlideButton from "./SlideButton";

export default function Main(){
  const [pictureList, setPictureList] = useState([])
  const [imgIndex, setImgIndex] = useState(0);
  // const DEFAULT_IMG = "https://securecdn.pymnts.com/wp-content/uploads/2016/06/Slow-load-times-eCommerce.png"
  const DEFAULT_IMG = "https://images.unsplash.com/photo-1460411794035-42aac080490a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNzk2MTN8MHwxfHNlYXJjaHwyfHxza3klM0Z8ZW58MHx8fHwxNjY4MDkzMzQ5&ixlib=rb-4.0.3&q=80"
  function nextMeme(){
    setImgIndex((prevIndex)=>{
      return prevIndex < pictureList.length - 1 ? prevIndex + 1 : prevIndex
    })
  }

  function prevMeme(){
    setImgIndex((prevIndex)=>{
      return prevIndex > 0 ? prevIndex - 1 : prevIndex
    })
  }

  function getMemeSrc(){
    return pictureList[imgIndex] ? pictureList[imgIndex].urls.full : false;
  }

  useEffect(()=>{ 
    // const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    // const perPage = 40, query = "sky", orientation = "landscape";
    // fetch(`https://api.unsplash.com/search/photos/?query=${query}?&per_page=${perPage}&orientation=${orientation}&client_id=${key}`)
    //   .then((response)=> response.json())
    //   .then(data=> setPictureList(data.results))
  },[])

  return (
    <div className="relative pt-6 flex flex-col col-start-2 col-end-3 items-center">
        <SlideButton/>
        <MemeSlider src={getMemeSrc() || DEFAULT_IMG} handleNext={nextMeme} handlePrev={prevMeme}/>
    </div>
  )
}