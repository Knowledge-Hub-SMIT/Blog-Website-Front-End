import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBlogsAction from "../redux/actions/loadBlogsAction";
import {
  setSort,
  sortFirstUpload,
  sortLastUpload,
  sortMostViewed,
} from "../redux/actions/sortAction";
import BlogCard from "./BlogCard";
import Loading from "./loading/Loading";

const Blogs = () => {
  const { blogs, loading, sort, filter, filtered } = useSelector(
    (state) => state.blog
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (sort === "last") {
      dispatch(sortLastUpload());
    } else if (sort === "popular") {
      dispatch(sortMostViewed());
    } else {
      dispatch(sortFirstUpload());
    }
  }, [dispatch, sort]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <div className="flex items-center flex-wrap justify-between my-4">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          {filter ? `Search result for: ${filter}` : "THE LATEST BUZZ"}
        </h3>
        <label htmlFor="sort" className="flex items-center gap-2">
            SORT BY:{" "}
          <select
            name="sort"
            id="sort"
            className="focus:outline-none py-1 px-3 bg-white rounded"
            onChange={(e) => dispatch(setSort(e.target.value))}
            value={sort}
          >
            <option value="first">EARLIEST</option>
            <option value="last">LATEST</option>
            <option value="popular">POPULAR</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6 my-8">
        {filter
          ? filtered.map((blog) => <BlogCard blog={blog} key={blog._id} />)
          : blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)}
      </div>
      {filter && (
        <div className="mb-6 mr-2 flex justify-end">
          <button
            className="text-xl text-primary font-semibold"
            onClick={() => dispatch(loadBlogsAction())}
          >
            SEE ALL
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
