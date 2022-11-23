import { useContext, useState, useRef } from "react";
import Books from "../../Contexts/Books";
//Nuotrauka
import getBase64 from "../../Functions/getBase64";
import DataContext from "../../Contexts/DataContext";

function Create() {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState(0);
  //Nuotrauka
  const fileInput = useRef();

  const { setCreateData, cats } = useContext(Books);
  //Nuotrauka pradzia
  const [photoPrint, setPhotoPrint] = useState(null);
  const { makeMsg } = useContext(DataContext);
  
  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {
        // tylim
      });
  };
//Nuotrauka pabaiga

  const add = () => {
    if (title.length === 0 || title.length > 50) {
      makeMsg("Invalid type. Please use up to 50 symbols", "error");
      return;
    }
    if (cat === 0) {
      makeMsg("Please choose a category.", "error");
      return;
    }
    setCreateData({
      title,
      cat_id: parseInt(cat),
      //Nuotrauka
      image: photoPrint,
    });
    setTitle("");
    setCat(0);
    //Nuotrauka
    setPhotoPrint(null);
    fileInput.current.value = null;
  };

  return (
    <div className="card m-4">
      <h5 className="card-header">New Book</h5>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-3">
            <label className="form-label">Categories</label>
            <select
              className="form-select"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option value={0} disabled>
                Choose from list
              </option>
              {cats?.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          {/* Nuotrauka su input  */}
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              ref={fileInput}
              type="file"
              onChange={doPhoto}
              className="form-control"
            />
          </div>
          {photoPrint ? (
            <div className="img-bin">
              <img src={photoPrint} alt="upload"></img>
            </div>
          ) : null}

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

export default Create;
