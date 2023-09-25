import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleAddReadingTime }) => {
  const {
    id,
    title,
    cover,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4 mt-5">
      <img
        className="w-full mb-8 rounded-lg"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_image} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
            className="ml-2 text-2xl text-red-600"
            onClick={() => handleAddToBookmark(blog)}
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-purple-400">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleAddReadingTime(id, reading_time)}
        className="font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleAddReadingTime: PropTypes.func,
};

export default Blog;
