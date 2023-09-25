import PropTypes from "prop-types";
import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-lg">
      <div>
        <h3 className="text-2xl text-indigo-700 text-center font-bold">
          Reading Time: {readingTime}
        </h3>
      </div>
      <h2 className="text-3xl font-semibold text-center">
        Bookmarked Here:{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
