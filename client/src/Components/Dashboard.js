import React, { useEffect, useState } from "react";

const Dashboard = (props) => {

    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState('');
  
    const handlePostChange = (e) => {
      setNewPostText(e.target.value);
    };
  
    const handlePostSubmit = (e) => {
      e.preventDefault();
      if (newPostText.trim() === '') return;
      const newPost = {
        id: Date.now(),
        text: newPostText.trim(),
        date: new Date().toLocaleDateString(),
      };
      setPosts([...posts, newPost]);
      setNewPostText('');
    };
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Public Forum</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="w-full p-4 border border-gray-300 rounded mb-4"
          value={newPostText}
          onChange={handlePostChange}
          placeholder="Write your post..."
          rows={5}
          required
        />
        <br />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Post
        </button>
      </form>
      <div className="mt-8">
        {posts.map(post => (
          <div key={post.id} className="border border-gray-300 rounded p-4 mb-4">
            <p>{post.text}</p>
            <p className="text-sm text-gray-600 mt-2">Date: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Dashboard;
