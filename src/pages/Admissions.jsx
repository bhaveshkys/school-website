import React from 'react';

const Admissions = () => {
  const downloadDummyData = () => {
    const dummyData = `Admission Form Availability: March 1st\nLast Date for Submission: March 31st\nEntrance Test: April 15th\nAnnouncement of Results: April 30th\n\nCriteria:\nAdmission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.\n\nSeats Information:\nTotal Seats: 200\nAvailable Seats: 50`;

    const blob = new Blob([dummyData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'admissions_info.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-secondary p-6">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Admissions</h1>

        <div className=" overflow-hidden p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Important Dates</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Admission Form Availability: <strong>March 1st</strong></li>
            <li>Last Date for Submission: <strong>March 31st</strong></li>
            <li>Entrance Test: <strong>April 15th</strong></li>
            <li>Announcement of Results: <strong>April 30th</strong></li>
          </ul>
        </div>
        <div className="bg-white   overflow-hidden p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Process</h2>
          <p className="text-lg mb-4">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
          <button
            onClick={downloadDummyData}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Download Dummy Data
          </button>
        </div>

        <div className=" overflow-hidden p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Criteria</h2>
          <p className="text-lg mb-4">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-2 border-b text-left text-gray-700">Total Seats</th>
                <th className="px-6 py-2 border-b text-left text-gray-700">Available Seats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 border-b text-gray-800">200</td>
                <td className="px-6 py-4 border-b text-gray-800">50</td>
              </tr>
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  );
};

export default Admissions;
