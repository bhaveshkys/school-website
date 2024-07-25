import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Springdale Public School</h2>
            <p className="mt-2">
              123 Education Lane, Cityville, State, ZIP Code
            </p>
            <p className="mt-2">Phone: +1 (123) 456-7890</p>
            <p className="mt-2">Email: <a href="mailto:info@springdale.edu" className="text-white underline">info@springdale.edu</a></p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:ml-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-white hover:text-primary">Home</a></li>
                <li><a href="/about" className="text-white hover:text-primary">About Us</a></li>
                <li><a href="/academics" className="text-white hover:text-primary">Academics</a></li>
                <li><a href="/admissions" className="text-white hover:text-primary">Admissions</a></li>
                <li><a href="/faculty" className="text-white hover:text-primary">Faculty</a></li>
                <li><a href="/students" className="text-white hover:text-primary">Students</a></li>
                <li><a href="/gallery" className="text-white hover:text-primary">Gallery</a></li>
                <li><a href="/contact" className="text-white hover:text-primary">Contact Us</a></li>
              </ul>
            </div>
            <div className="md:ml-6">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <ul className="mt-2 flex space-x-4">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary"><i className="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary"><i className="fab fa-instagram"></i> Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-white pt-4">
          <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
