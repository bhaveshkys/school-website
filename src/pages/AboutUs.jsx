import React from 'react'

const AboutUs = () => {
  return (
    <div>
        
        <div  className="relative h-[257px] md:h-[518px] w-fill-available ">
              <img src={"/aboutUs.jpeg"} alt={"pic"} className={`w-full h-full object-cover   `} />
              <div className="absolute inset-0 flex items-center justify-center bg-black  bg-opacity-50">
                <div className="text-center text-white px-6 py-4">
                  <h2 className=" text-[50px] md:text-[70px] font-bold">About Us</h2>
                </div>
              </div>
        </div>
        <div className='mt-[35px] mb-[90px]'>
            <div className='text-primary text-[30px] md:text-[50px] font-bold flex justify-center'>About The School</div>
            <div className='px-[34px] md:px-[84px] text-center font-normal text-[18px] md:text-[20px] mt-[50px]'>
                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Over the years, the school has grown from a small institution to one of the leading educational establishments in Delhi. Recognized by the Central Board of Secondary Education (CBSE), Springdale Public School has consistently upheld high academic standards and a commitment to fostering a nurturing environment.
            </div>
            <div className=' px-[34px] md:px-[84px] text-center font-normal text-[18px] md:text-[20px] mt-[15px]'>
            The school prides itself on its state-of-the-art facilities, innovative teaching methodologies, and a vibrant community of students, teachers, and staff. With a focus on both academic excellence and extracurricular engagement, Springdale has successfully shaped the futures of countless young minds, guiding them towards success and personal growth.
            </div>
        </div>
        <div>
            <img className='hidden md:block' src="/visionDesktop.jpeg" alt="" />
            <img className='md:hidden' src="/visionMobile.jpeg" alt="" />
        </div>
        <div>
            <img className='hidden md:block' src="/missionDesktop.jpeg" alt="" />
            <img className='md:hidden' src="/missionMobile.jpeg" alt="" />
        </div>
        <div>
            <img className='hidden md:block' src="/chairPersonDesktop.jpeg" alt="" />
            <img className='md:hidden' src="/chairPersonMobile.jpeg" alt="" />
        </div>
        <div className='mt-[35px] mb-[90px]'>
            <div className='text-primary text-[30px] md:text-[50px] font-bold flex justify-center'>Infrastructure and Facilities</div>
            <div className='px-[34px] md:px-[250px] text-center font-normal text-[18px] md:text-[20px] mt-[50px]'>
            <div className='text-primary font-bold'>State-of-the-art science and computer labs:</div> 
            Our advanced science and computer laboratories are equipped with the latest technology and equipment, providing students with hands-on learning experiences and fostering a deep understanding of scientific and technological concepts.
            </div>
            <div className=' px-[34px] md:px-[250px] text-center font-normal text-[18px] md:text-[20px] mt-[30px]'>
            <div className='text-primary font-bold'>Spacious and well-equipped classrooms:</div> 
Our classrooms are designed to be spacious and conducive to learning, featuring modern amenities and ergonomic furniture that create a comfortable and engaging learning environment.
            </div>
            <div className=' px-[34px] md:px-[250px] text-center font-normal text-[18px] md:text-[20px] mt-[30px]'>
            <div className='text-primary font-bold'>Library with a vast collection of books and digital resources:</div> 
Our library offers an extensive collection of books, journals, and digital resources, encouraging students to cultivate a love for reading and research. It serves as a quiet and inspiring place for study and exploration.
            </div>
            <div className=' px-[34px] md:px-[250px] text-center font-normal text-[18px] md:text-[20px] mt-[30px]'>
            <div className='text-primary font-bold'>Sports facilities including a  gymnasium, and swimming pool:</div> 
We provide top-notch sports facilities, including a playground, a well-equipped gymnasium, and a swimming pool. These amenities promote physical fitness, teamwork, and a healthy lifestyle among our students.
            </div>
        </div>
    </div>
  )
}

export default AboutUs