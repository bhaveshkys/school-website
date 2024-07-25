import React, { forwardRef,useState } from 'react';
const ContactForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" py-12 px-2 md:flex bg-white md:w-fill-available justify-center">
      <div className="rounded-lg shadow-lg px-2 w-fill-available md:h-[590px] md:w-[500px] bg-[#F9ECEB] ">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
        <div className="mt-3">
          <h3 className="text-lg font-bold text-center text-primary">Contact Information</h3>
          <p className="text-center text-gray-700 mt-2">
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <p className="text-center text-gray-700 mt-2">Phone: +1 (123) 456-7890</p>
          <p className="text-center text-gray-700 mt-2">Email: info@springdale.edu</p>
        </div>
        </div>
        <div className="ml-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.901661981895!2d77.11996131453133!3d28.608373382474548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1b96ab741cb%3A0x337f09d5615ad08e!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1677535881796!5m2!1sen!2sin"

            allowFullScreen=" "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-md mx-auto w-fill-available md:h-[590px] md:w-[500px]"
          ></iframe>
        </div>
      
    </div>
  );
});

export default ContactForm;