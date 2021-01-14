import React from "react";
import ReactDom from "react-dom";

//Nested Components

// function App() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>This is John</p>;
// };

// ReactDom.render(<App />, document.getElementById("root"));

// Booklist - Similar to Amazon Best selling books webpage

//CSS
import "./index.css";

// setup vars
// const title = "The book";
// const author = "Shadow";
// const img = "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg";
const books = [
  {
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg",
    title: "The book",
    author: "Shadow",
  },

  {
    img: "https://m.media-amazon.com/images/I/41q3R6WxnFL._AC_UY218_.jpg",
    title: "As A Man Thinketh (Pocket Classics)",
    author: "Shadow",
  },
];

function Booklist() {
  return <section className="booklist">{books}</section>;
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h1>{props.author}</h1>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
