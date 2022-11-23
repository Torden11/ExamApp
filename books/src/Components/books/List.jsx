import { useContext } from "react";
import Books from "../../Contexts/Books";
import Line from "./Line";

function ListMovie() {
  const { books } = useContext(Books);

  return (
    <div className="card m-4">
      <h5 className="card-header">Books list</h5>
      <div className="card-body">
        <ul className="list-group">
          {books?.map(b => (
            <Line key={b.id} book={b} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListMovie;
