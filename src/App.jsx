import React, { useState } from 'react';
    import { FaHeart, FaRegHeart } from 'react-icons/fa';

    function App() {
      const videos = [
        {
          id: 1,
          title: 'Amazing Nature',
          channel: 'Nature Channel',
          views: 123456,
          url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
        },
        {
          id: 2,
          title: 'Cool Tech Demo',
          channel: 'Tech Demos',
          views: 654321,
          url: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
        },
      ];

      const posts = [
        {
          id: 1,
          user: {
            username: 'naturelover',
            avatarUrl: 'https://placekitten.com/40/40',
          },
          title: 'Beautiful Sunset',
          content: 'Enjoying a beautiful sunset at the beach.',
          imageUrl: 'https://placekitten.com/640/360',
        },
        {
          id: 2,
          user: {
            username: 'cityexplorer',
            avatarUrl: 'https://placekitten.com/41/41',
          },
          title: 'City Lights',
          content: 'The city looks amazing at night.',
          imageUrl: 'https://placekitten.com/641/360',
        },
        {
          id: 3,
           user: {
            username: 'mountainman',
            avatarUrl: 'https://placekitten.com/42/42',
          },
          title: 'Mountain View',
          content: 'Hiking in the mountains is always a great idea.',
          imageUrl: 'https://placekitten.com/642/360',
        },
      ];

      return (
        <div className="bg-gray-100">
          <AppBar />
          <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
              <div className="video-section md:w-2/3 p-4">
                <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
                {videos.map((video) => (
                  <div key={video.id} className="video-item mb-6 border rounded p-4 bg-white shadow">
                    <video controls src={video.url} className="w-full max-h-96 mb-2" />
                    <h3 className="text-xl font-semibold mb-1">{video.title}</h3>
                    <div className="text-gray-600 text-sm">
                      <span>{video.channel}</span>
                      <span className="ml-2"> {video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="post-feed-section md:w-1/3 p-4 md:border-l md:border-gray-300">
                <h2 className="text-2xl font-bold mb-4">Post Feed</h2>
                {posts.map((post) => (
                  <PostItem key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    function AppBar() {
      return (
        <div className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My App</h1>
          </div>
        </div>
      );
    }

    function PostItem({ post }) {
      const [liked, setLiked] = useState(false);

      const toggleLike = () => {
        setLiked(!liked);
      };

      return (
        <div className="post-item mb-6 p-4 border rounded bg-white shadow">
          <div className="flex items-center mb-2">
            <img src={post.user.avatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
            <span className="font-semibold">{post.user.username}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <img src={post.imageUrl} alt={post.title} className="w-full mb-2 rounded" />
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-700">{post.content}</p>
            <button onClick={toggleLike} className="text-xl">
              {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      );
    }

    export default App;
