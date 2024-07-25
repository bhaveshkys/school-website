import React from 'react';

const GalleryGrid = () => {
  const photos = [
    {
      src: '/sportsDay.jpeg',
      alt: 'Students participating in various sports events.',
      caption: 'Students participating in various sports events.',
    },
    {
      src: '/sciExibition.jpeg',
      alt: 'Students presenting their science projects.',
      caption: 'Students presenting their science projects.',
    },
    {
      src: 'ethnicDay.jpg',
      alt: 'Students performing in the cultural fest.',
      caption: 'Students performing in the cultural fest.',
    },
    {
      src: '/class.jpeg',
      alt: 'A glimpse of our interactive classrooms.',
      caption: 'A glimpse of our interactive classrooms.',
    },
    {
      src: '/library.jpg',
      alt: 'Students reading and studying in the school library.',
      caption: 'Students reading and studying in the school library.',
    },
    {
      src: '/computer.jpg',
      alt: 'Students coding and studying in the school computer Lab.',
      caption: 'Students coding and studying in the school computer Lab',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-700">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/full-gallery"
            className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;