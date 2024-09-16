import { useContext, useState, useEffect } from "react";
import { TokenContext } from "../../App";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";

function UpdateBook() {
  const { token } = useContext(TokenContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [book, setBook] = useState("");
  const [book_cover, setBook_Cover] = useState("");
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLogged, setIsLogged } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/v1/book/${id}`, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status && result.data) {
          const { title, description, year, book_cover } = result.data;
          setTitle(title);
          setDescription(description);
          setYear(year);
          setBook_Cover(book_cover);
          setBook(result.data);
        }
      });
  }, [id, token]);

  function updateBook() {
    const bodyUpdatedBook = {
      title,
      description,
      year,
      book_cover,
    };

    fetch(`/api/v1/book/${id}`, {

      method: "PUT",
      headers: {
        Authorization: `${token}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyUpdatedBook),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Can't update");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Book updated")
        navigate("/books");    
    })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleTitleToChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionToChange(event) {
    setDescription(event.target.value);
  }

  function handleYearToChange(event) {
    setYear(Number(event.target.value));
  }

  function handleBookCover(event) {
    setBook_Cover(event.target.value);
  }

  return (
    <>
      {isLogged && (
        <div className="container-new-books">
          <h3 className="upload-new-book">Update Book</h3>

          <input
            type="text"
            onChange={handleTitleToChange}
            placeholder="Title"
            className="book-name"
            value={title} 
          />
          <input
            type="number"
            onChange={handleYearToChange}
            placeholder="Year"
            className="year"
            value={year} 
          />
          <input
            type="text"
            onChange={handleDescriptionToChange}
            placeholder="Description"
            className="description"
            value={description} 
          />
          <input
            type="url"
            onChange={handleBookCover}
            placeholder="Book Cover URL"
            className="book-cover-update-book"
            value={book_cover} 
          />

          <div>
            <button onClick={updateBook}>Update</button>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateBook;
