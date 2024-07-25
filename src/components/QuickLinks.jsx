import React from 'react'

const Imagee=({src,caption})=>{
    return(
        <div  className="relative h-[220px] w-[360px] ">
            <a href="">
              <img src={src} alt={"pic"} className={`w-full h-full object-cover rounded-lg   `} />
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg bg-opacity-50">
                <div className="text-center text-white px-6 py-4">
                  <h2 className="text-2xl font-bold">{caption}</h2>
                </div>
              </div>
              </a>
            </div>
    )
}
const QuickLinks = () => {
  return (
    <div className='mt-5'>
        <div className="text-3xl font-bold text-center text-primary mb-6">Life At SpringDale</div>
        <div className='flex flex-col md:hidden items-center justify-center overflow-hidden md:gap-x-8 gap-y-8'>
            <Imagee src={"/teachers.jpg"} caption={"Faculty"}/>
            <Imagee src={"/books.jpeg"} caption={"Academics"}/>
            <Imagee src={"/students.jpeg"} caption={"Students"}/> 
        </div>
        <div className='hidden md:flex  items-center justify-center overflow-hidden md:gap-x-8'>
            <Imagee src={"/teachers.jpg"} caption={"Faculty"}/>
            <Imagee src={"/books.jpeg"} caption={"Academics"}/>
            <Imagee src={"/students.jpeg"} caption={"Students"}/> 
        </div>
    </div>
  )
}

export default QuickLinks