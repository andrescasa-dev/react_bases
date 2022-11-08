import {useState, useEffect} from "react";
import ToolBar from "./Toolbar"
import MemeSlider from "./MemeSlider"
export default function Main(){
  const [memeList, setMemeList] = useState([])
  const [memeIndex, setMemeIndex] = useState(0);
  const DEFAULT_IMG = "https://securecdn.pymnts.com/wp-content/uploads/2016/06/Slow-load-times-eCommerce.png"
  function nextMeme(){
    setMemeIndex((prevIndex)=>{
      return prevIndex < memeList.length - 1 ? prevIndex + 1 : prevIndex
    })
  }

  function prevMeme(){
    setMemeIndex((prevIndex)=>{
      return prevIndex > 0 ? prevIndex - 1 : prevIndex
    })
  }

  function getMemeSrc(){
    return memeList[memeIndex] ? memeList[memeIndex].url : false;
  }

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then((response)=> response.json())
      .then((memeData)=> setMemeList(memeData.data.memes))
  },[])

  return (
    <div className="mt-6 flex flex-col col-start-2 col-end-3 items-center relative">
        <ToolBar/>
        <MemeSlider src={getMemeSrc() || DEFAULT_IMG} handleNext={nextMeme} handlePrev={prevMeme}/>
    </div>
  )
}