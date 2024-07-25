import React from 'react'

const Video = ({ src, caption }) => {
    return (
      <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="315"
          src={src}
          title={caption}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 text-center">
          <p className="text-white text-lg font-bold">{caption}</p>
        </div>
      </div>
    );
  };
  
const Gallery = () => {
    const media = [
        {
          type: 'photo',
          src: '/sportsDay.jpeg',
          alt: 'Students participating in various sports events.',
          caption: 'Students participating in various sports events.',
        },
        {
          type: 'photo',
          src: '/sciExibition.jpeg',
          alt: 'Students presenting their science projects.',
          caption: 'Students presenting their science projects.',
        },
        {
          type: 'photo',
          src: 'ethnicDay.jpg',
          alt: 'Students performing in the cultural fest.',
          caption: 'Students performing in the cultural fest.',
        },
        {
          type: 'photo',
          src: '/class.jpeg',
          alt: 'A glimpse of our interactive classrooms.',
          caption: 'A glimpse of our interactive classrooms.',
        },
        {
          type: 'photo',
          src: '/library.jpg',
          alt: 'Students reading and studying in the school library.',
          caption: 'Students reading and studying in the school library.',
        },
        {
          type: 'video',
          src: 'https://www.youtube.com/embed/zWlXJPTb_Vk',
          caption: 'Virtual tour of Springdale Public School.',
        },
        {
          type: 'video',
          src: 'https://www.youtube.com/embed/zWlXJPTb_Vk',
          caption: 'Highlights from the Annual Function 2023.',
        },
      ];
      
    
      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">Full Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {media.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {item.type === 'photo' ? (
                    <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
                  ) : (
                    <Video src={item.src}/>
                  )}
                  <div className="p-4">
                    <p className="text-gray-700">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Gallery