import { TokenContext } from "../../App";
import { useContext, useState } from "react";
import "./style.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom"; 


function AddBook() {
  const { token } = useContext(TokenContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const { authUser, setAuthUser, isLogged, setIsLogged } = useAuth();

  function addNewBook() {
    const bodyNewBook = {
      title,
      description,
      year,
    };

    fetch("/api/v1/book/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(bodyNewBook),
      redirect: "follow",
    })
      .then((response) => response.json())

      .catch((e) => {
        console.log(e);
      });
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  function handleYear(event) {
    setYear(Number(event.target.value));
  }

  return (
    <>
      {isLogged ? (
        <div className="container-new-books">
          <h3 className="upload-new-book">Upload a New Book</h3>

          <input
            type="text"
            onChange={handleTitle}
            placeholder="The book's name"
            className="book-name"
          />
          <input
            type="number"
            onChange={handleYear}
            placeholder="The year of publish"
            className="year"
          />
          <input
            type="text"
            onChange={handleDescription}
            placeholder="Small description"
            className="description"
          />

          <div className="container-new-button">
            <button onClick={addNewBook} className="add-new-button">
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className="container-warning">
          <h3 className="warning">
            You are not logged in. Please{" "}
            <Link to="/login" className="login-link">
              log in
            </Link>{" "}
            to add a new book.
          </h3>
        </div>
      )}
    </>
  );
}

export default AddBook;
