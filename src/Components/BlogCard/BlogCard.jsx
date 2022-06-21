import React from "react";

const BlogCard = (props) => {
  const { content, children } = props;
  const { question, answer } = content;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <p className="card-text">{answer}</p>
        {children}
      </div>
    </div>
  );
};

export default BlogCard;
