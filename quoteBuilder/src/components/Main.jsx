import {useState, useEffect} from "react";
import Button from "./Button";
import Picture from "./Picture"
import SlideButton from "./SlideButton";
import saveIcon from "../assets/save.svg"
import downloadIcon from "../assets/download.svg"

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
    <div className="md:grid-cols-main-md relative pt-6 grid grid-cols-main justify-center col-start-1 col-end-[-1] ">
        <menubar className="md:grid-cols-main-md md:gap-y-4 md:grid-rows-main md:row-start-1 md:relative grid grid-cols-main fixed bottom-0 right-0 left-0 col-start-1 col-end-[-1] md:gap-x-0 gap-x-1">
            <li className="md:row-start-2 md:col-start-3 col-start-2 list-none"><Button icon={downloadIcon} tailwind={["md:rounded-tr-[1.3em]"]} alt="download" /></li>
            <li className="md:row-start-3 md:col-start-3 list-none"><Button icon={saveIcon} tailwind={["md:rounded-br-[1.3em]"]} alt="save" /></li>
            <li className="med:row-start-1 md:col-start-2 md:col-end-[-3] grow col-start-4 col-end-[-2] list-none"><SlideButton/></li>           
        </menubar>
        <div className="z-10 md:grid-cols-main-md md:grid-rows-main md:row-start-1  min-h-[90vh] grid grid-cols-main col-start-1 col-end-[-1]">
          <div className="md:row-start-2 md:col-start-2 md:col-end-[-3] md:mx-2  col-start-2 col-end-[-2]">
            <Picture src={getMemeSrc() || DEFAULT_IMG} handleNext={nextMeme} handlePrev={prevMeme}/>
          </div>
        </div>
    </div>
  )
}