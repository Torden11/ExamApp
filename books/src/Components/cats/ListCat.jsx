import { useContext } from "react";
import Cats from "../../Contexts/Cats";
import LineCat from "./LineCat";

function ListCat() {
  const { cats } = useContext(Cats);

  return (
    <div className="card m-4">
      <h5 className="card-header">Categories list</h5>
      <div className="card-body">
        <ul className="list-group">
          {cats?.map((c) => (
            <LineCat key={c.id} cat={c} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListCat;
