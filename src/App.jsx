import React from 'react';

    function App() {
      const videos = [
        {
          id: 1,
          title: 'Amazing Nature',
          url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
        },
        {
          id: 2,
          title: 'Cool Tech Demo',
          url: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
        },
      ];

      const news = [
        {
          id: 1,
          title: 'Breaking News',
          content: 'This is a breaking news story about something important.',
        },
        {
          id: 2,
          title: 'Local Event',
          content: 'A local event is happening this weekend, come join us!',
        },
        {
          id: 3,
          title: 'Tech Update',
          content: 'New tech updates are coming soon, stay tuned!',
        },
      ];

      return (
        <div className="container mx-auto p-4 bg-gray-100">
          <div className="flex flex-col md:flex-row">
            <div className="video-section md:w-2/3 p-4">
              <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
              {videos.map((video) => (
                <div key={video.id} className="video-item mb-6 border rounded p-4 bg-white shadow">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <video controls src={video.url} className="w-full max-h-96" />
                </div>
              ))}
            </div>
            <div className="newsfeed-section md:w-1/3 p-4 md:border-l md:border-gray-300">
              <h2 className="text-2xl font-bold mb-4">News Feed</h2>
              {news.map((item) => (
                <div key={item.id} className="news-item mb-4 p-3 border-b border-gray-200">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    export default App;
