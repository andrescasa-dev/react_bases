import Button from "./Button"
import saveIcon from "../assets/save.svg"
import downloadIcon from "../assets/download.svg"
import randomIcon from "../assets/random.svg"

export default function ToolBar(){
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-back md:relative self-stretch flex justify-center">
      <menu className="flex gap-1 m-2 justify-center md:w-[60&] w-[80%]">
          <Button icon={saveIcon} alt="save" />
          <Button icon={downloadIcon} alt="download" />
          <Button icon={randomIcon} alt="random" />
      </menu>
    </div>
  )
}