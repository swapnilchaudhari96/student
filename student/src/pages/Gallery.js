import React from 'react';

const Gallery = () => {
  return (
    <div style={{ "marginBottom":"90px"}}>
      <h1>Gallery</h1>
      <p>Explore our photo gallery to see moments from various school events and activities.</p>
      <div className="gallery-grid">
        <img src="https://plus.unsplash.com/premium_photo-1663050763436-818382a24bb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="Event 1" />
        <img src="https://plus.unsplash.com/premium_photo-1665520346911-e23900128e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="Event 2" />
        <img src="https://media.istockphoto.com/id/949118068/photo/books.webp?b=1&s=170667a&w=0&k=20&c=yzRVIZiIuacZSNf8fBBQiokhJJh2FO6F1EZ4zeZchUY=" alt="Event 3" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;
