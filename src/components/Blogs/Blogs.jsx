import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md: w-2/3">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
    </div>
  );
};

export default Blogs;
