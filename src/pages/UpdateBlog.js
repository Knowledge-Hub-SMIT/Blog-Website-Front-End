import React from "react";
import BlogForm from "../components/BlogForm";

const UpdateBlog = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold my-8">
        UPDATE BLOG<span className="text-primary"></span>
      </h1>

      <BlogForm type="update" />
    </div>
  );
};

export default UpdateBlog;
