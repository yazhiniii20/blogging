import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "./BlogCanvas.css";

const BlogCanvas = () => {
  const [content, setContent] = useState("");

  return (
    <div className="blog-editor">
      <h2>Create a New Blog</h2>
      
      {/* ReactQuill Editor */}
      <ReactQuill 
        theme="snow" 
        value={content} 
        onChange={setContent} 
        className="quill-editor"
      />

      <button onClick={() => console.log(content)}>Publish</button>
    </div>
  );
};

export default BlogCanvas;
