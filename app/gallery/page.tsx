import React from 'react';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Our Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery images will be added here */}
          <div className="aspect-square bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
            <p className="text-gray-600 text-center">Gallery images coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 