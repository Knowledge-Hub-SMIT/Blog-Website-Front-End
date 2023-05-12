import React from "react";
import BlogForm from "../components/BlogForm";

const AddNewBlog = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold my-8">
        ADD NEW BLOG<span className="text-primary"></span>
      </h1>

      <BlogForm type="add-new" />
    </div>
  );
};

export default AddNewBlog;
