import { useContext } from "react";
import Books from "../../Contexts/Books";

function Line({ book }) {
  const { setDeleteData, setModalData, cats } = useContext(Books);

  return (
    <li className="list-group-item">
      <div className="line">
        <div className="line__content">
          {/* Nuotrauka pradzia */}
          <div className="line__content__title">
            {book.image ? (
              <div className="img-bin">
                <img src={book.image} alt={book.title}></img>
              </div>
            ) : (
              <span className="red-image">No image</span>
            )}
          </div>
          {/* Nuotrauka pabaiga */}
          <div className="title-container">
          <div className="line__content__title">{book.title}</div>
          <div className="line__content__author">Author: {book.author}</div>
          </div>
          <div className="line__content__cat">
            Category: {cats.find((c) => c.id === book.cat_id)?.title}
          </div>
        </div>
        <div className="mx-auto line__buttons">
          <button
            onClick={() => setModalData(book)}
            type="button"
            className="btn btn-outline-success"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteData(book)}
            type="button"
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Line;
