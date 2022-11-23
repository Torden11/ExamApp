import { useContext, useState } from "react";
import Cats from "../../Contexts/Cats";
import DataContext from "../../Contexts/DataContext";

function CreateCat() {
  const [title, setTitle] = useState("");

  const { setCreateData } = useContext(Cats);
  const { makeMsg } = useContext(DataContext);

  const add = () => {
    if (title.length === 0 || title.length > 30) {
      makeMsg("Invalid type. Please use up to 30 symbols", "error");
      return;
    }
    setCreateData({
      title,
    });
    setTitle("");
  };

  return (
    <div className="card m-4">
      <h5 className="card-header">New category</h5>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Category Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={add}
            className="btn btn-outline-success"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateCat;
