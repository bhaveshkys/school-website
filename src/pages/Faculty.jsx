import React from 'react';

const facultyProfiles = [
  {
    name: "John Doe",
    title: "Principal",
    qualifications: "M.Ed, 20 years of experience in educational administration",
    photo: "/principle.jpg",
    attribute:""
  },
  {
    name: "Jane Smith",
    title: "Vice Principal",
    qualifications: "M.Sc. in Physics, 15 years of teaching experience",
    photo: "/vicePrincipal.jpg", 
    attribute:"object-top"
},
  {
    name: "Emily Johnson",
    title: "English Teacher",
    qualifications: "M.A. in English, 10 years of teaching experience",
    photo: "/englishTeacher.jpg",
    attribute:"object-top"
  },
  {
    name: "Michael Brown",
    title: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics, 8 years of teaching experience",
    photo: "/mathsTeacher.jpeg",
    attribute:"object-top"
  },
  {
    name: "Sophia Davis",
    title: "Science Teacher",
    qualifications: "M.Sc. in Chemistry, 12 years of teaching experience",
    photo: "/scienceTeacher.jpeg",
    attribute:""
  },
  {
    name: "David Wilson",
    title: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science, 5 years of teaching experience",
    photo: "/computerScienceTeacher.jpeg",
    attribute:"object-top"
  },
];

const Faculty = () => {
  return (
    <div className="bg-gray-100 text-secondary p-6">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Faculty</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {facultyProfiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden relative group"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className={`w-full h-48 object-cover ${profile.attribute} `}
              />
              <div className="p-4">
                <p className="text-gray-700">{profile.name}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xl font-bold">{profile.title}</p>
                <p className="text-sm mt-2">{profile.qualifications}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
