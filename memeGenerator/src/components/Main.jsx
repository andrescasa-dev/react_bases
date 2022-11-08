import {useState} from React;
import ToolBar from "./Toolbar"
import MemeSlider from "./MemeSlider"
export default function Main(){
  return (
    <div className="mt-6 flex flex-col col-start-2 col-end-3 items-center relative">
        <ToolBar/>
        <MemeSlider src=""/>
    </div>
  )
}