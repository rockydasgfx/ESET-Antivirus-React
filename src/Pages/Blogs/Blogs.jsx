import React from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Blogs = () => {
  const questionOne = {
    question: "What is Context API ?",
    answer:
      "The Context API allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.We can use React Context API to avoid prop drilling.",
  };
  const questionTwo = {
    question: "What is Semantic Tag in HTML?",
    answer:
      "A semantic element clearly describes its meaning to both the browser and the developer.In HTML there are some semantic elements that can be used to define different parts of a web page: <article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time> .",
  };
  const questionThree = {
    question: "what is the difference between inline inline-block and block?",
  };
  return (
    <div className="container mx-auto">
      <BlogCard content={questionOne} />
      <BlogCard content={questionTwo} />
      <BlogCard content={questionThree}>
        <p className="fw-bold">Inline elements:</p>
        <ol>
          <li>
            respect left & right margins and padding, but not top & bottom
          </li>
          <li>cannot have a width and height set</li>
          <li>allow other elements to sit to their left and right.</li>
        </ol>

        <p className="fw-bold">Block elements:</p>
        <ol>
          <li>respect all of those</li>
          <li>force a line break after the block element</li>
          <li>acquires full-width if width not defined</li>
        </ol>

        <p className="fw-bold">Inline-Block elements:</p>
        <ol>
          <li>allow other elements to sit to their left and right</li>
          <li>respect top & bottom margins and padding</li>
          <li>respect height and width</li>
        </ol>
      </BlogCard>
    </div>
  );
};

export default Blogs;
