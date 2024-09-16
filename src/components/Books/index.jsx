import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { TokenContext } from "../../App";
import { useNavigate } from "react-router-dom";
import UpdateBook from "../UpdateBooks";

function Books() {
  const [books, setBooks] = useState([]);
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  const fetchBooks = () => {
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
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  function deleteBook(id) {
    fetch(`/api/v1/book/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not ok");
        }
        fetchBooks(); 
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleUpdate(id) {
    navigate(`/updatebook/${id}`);
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
              <div className="button-books">
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <button onClick={() => handleUpdate(book.id)}>Update</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
