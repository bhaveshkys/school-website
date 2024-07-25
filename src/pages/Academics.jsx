import React from 'react';

const Academics = () => {
  return (
    <div className=" text-secondary p-6">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Academics</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead className="bg-primary text-white">
              <tr>
                <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">Level</th>
                <th className="w-3/4 text-left py-3 px-4 uppercase font-semibold text-sm">Subjects</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="text-left py-3 px-4">Primary (Grades 1-5)</td>
                <td className="text-left py-3 px-4">English, Mathematics, Science, Social Studies, Art, Physical Education</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-left py-3 px-4">Secondary (Grades 6-10)</td>
                <td className="text-left py-3 px-4">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</td>
              </tr>
              <tr>
                <td className="text-left py-3 px-4">Senior Secondary (Grades 11-12)</td>
                <td className="text-left py-3 px-4">
                  <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English<br />
                  <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Teaching Methodologies</h2>
          <p className="text-lg">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Educational Resources</h2>
          <p className="text-lg">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;