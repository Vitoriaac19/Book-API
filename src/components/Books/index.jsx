import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { TokenContext } from "../../App";

function Books() {
  const [books, setBooks] = useState([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    fetch("/api/v1/book/", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status && result.data) {
          setBooks(result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function deleteBook(id) {
    fetch(`/api/v1/book/${id}`, {
      method: "DELETE",
      headers: { Authorization: `${token}`,
      "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not ok");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <div className="container-book">
        <div className="book">
          {books.map((book) => (
            <div className="title-book" key={book.id}>
              <img
                src={book.book_cover}
                alt="books cover"
                className="book-cover"
              />
              <h3>{book.title}</h3>
              <p className="description">{book.description}</p>
              <p>{book.year}</p>
              <p>{book.id}</p>
              <div className="button">
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <button>Update</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;

//barra de pesquisa para todos os livros

//auth provider
