import React from 'react';

const Blog = ({ blog }) => {
  const { question, answer } = blog;

  return (
    <div className="border p-6 rounded-lg shadow-md mb-8 bg-white">
      <h3 className="text-black text-2xl font-bold mb-4">{question}</h3>
      <p className="text-gray-700 text-lg">{answer}</p>
    </div>
  );
};

export default Blog;
