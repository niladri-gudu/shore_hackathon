import { useState } from 'react'
import {assets} from '../../../assets/assets.js'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col space-between bg-[#f0f4f9] px-[25px] py-[25px]'>
        <img onClick={() => setExtended(prev => !prev)} className="menu w-[30px] block ml-[14px] cursor-pointer" src={assets.menu_icon} alt="" />
        <div className='newChat mt-[30px] inline-flex items-center gap-[10px] px-[20px] py-[15px] bg-[#e6eaf1] rounded-full  text-gray-500 cursor-pointer'>
          <img className="w-[20px]" src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
        <div className='recent flex flex-col'>
          <p className='recentTitle mt-[30px] mb-[20px]'></p>
          <div className='recentEntry flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
            <img className="w-[20px]" src={assets.message_icon} alt="" />
            <p>What is js...</p>
          </div>
        </div>
        : null }
      </div>
  )
}

export default Sidebar
