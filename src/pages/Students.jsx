import React from 'react';

const extracurricularActivities = [
    { name: "Music", src: "/music.jpg" },
    { name: "Dance", src: "/dance.jpg" },
    { name: "Drama", src: "/drama.jpg" },
    { name: "Art", src: "/art.jpg" },
    { name: "Sports", src: "/sportsDay.jpeg" },
    { name: "Robotics", src: "/robotics.jpg" },
    { name: "Debate Club", src: "/debate.jpg" },
    { name: "Science Club", src: "/sciExibition.jpeg" }
  ];
  
  const clubsAndSocieties = [
    { name: "Literary Society", src: "/literary.jpg" },
    { name: "Environmental Club", src: "/tree.jpeg" },
    { name: "Astronomy Club", src: "/astronomy.jpg" },
    { name: "Coding Club", src: "/coding.jpg" }
  ];

  const achievements = [
    {
      title: "John Smith - National Level Math Olympiad Winner",
      description: "John Smith has excelled in mathematics and secured the top position in the National Math Olympiad.",
      src: "/mathBoy.jpg" 
    },
    {
      title: "Sarah Lee - Gold Medalist in State Swimming Championship",
      description: "Sarah Lee demonstrated exceptional swimming skills and won the gold medal in the State Swimming Championship.",
      src: "/swimmingBoy.png" 
    },
    {
      title: "Tech Innovators Club - Winners of Inter-School Robotics Competition",
      description: "The Tech Innovators Club showcased their robotics skills and emerged victorious in the inter-school competition.",
      src: "/computerBoy.jpg" 
    }
  ];
  

  const studentCouncil = [
    {
      name: "Amy Parker",
      grade: "Grade 12",
      role: "President",
      image: "/headgirl.jpg" 
    },
    {
      name: "Rajiv Mehta",
      grade: "Grade 11",
      role: "Vice President",
      image: "/headboy.jpg" 
    },
    {
      name: "Lisa Wong",
      grade: "Grade 10",
      role: "Secretary",
      image: "/headboy2.jpg" 
    }
  ];

const AchievementCard = ({ src, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={src} alt={title} className="w-full h-40 object-contain" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
const Imagee = ({ src, caption }) => {
    return (
      <div className="relative h-[220px] w-[360px]">
        <img src={src} alt={caption} className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <div className="text-center text-white px-6 py-4">
            <h2 className="text-2xl font-bold">{caption}</h2>
          </div>
        </div>
      </div>
    );
  };
const Students = () => {
  return (
    <div className=" text-secondary p-6">
      <div className="max-w-6xl mx-auto py-8">
        
      <section>
          <h2 className="text-3xl font-bold text-primary mb-4 flex justify-center">Student Council</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {studentCouncil.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden relative group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-contain"
                />
                <div className="p-4">
                  <p className="text-gray-700 text-xl font-bold">{member.name}</p>
                  <p className="text-gray-500">{member.grade}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-bold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary  flex justify-center mt-5 mb-5">Life at Springdale</h2>
            <div className='flex flex-col md:block items-center'>
              <h3 className="text-2xl font-semibold text-primary mt-7 mb-2 flex justify-center">Extracurricular Activities</h3>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {extracurricularActivities.map((activity, index) => (
              <Imagee key={index} src={activity.src} caption={activity.name} />
            ))}
          </div> 
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary flex justify-center mt-7 mb-2">Clubs and Societies</h3>
              <div className='flex flex-col md:block items-center'>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {clubsAndSocieties.map((activity, index) => (
              <Imagee key={index} src={activity.src} caption={activity.name} />
            ))}
            </div>
          </div> 
            </div>
          
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 flex justify-center">Achievements</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                src={achievement.src}
                title={achievement.title}
                description={achievement.description}
              />
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default Students;
