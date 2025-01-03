import { assets } from "../../../assets/assets"


const Main = () => {
  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex w-full items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p className="font-bold">Get Personalized Tips</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="mainContainer max-w-[900px] m-auto">
        <div className="greet mx-[50px] text-[44px] text-[#c4c7c9] font-[700] p-[20px]">
          <p><span>Hello, User</span></p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards grid grid-cols-4 gap-[15px] p-[20px]">
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
          <div className="card h-[140px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer">
            <p className="text=[#585858] text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, nobis.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
