import Cats from "../../Contexts/Cats";
import { useContext, useEffect, useState } from "react";

function EditCat() {
  const { modalData, setModalData, setEditData } = useContext(Cats);
  const [title, setTitle] = useState("");

  //Zemiau rasome useEffect kad atsidarant edit langui uzsipyldytu visi langai esama info
  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTitle(modalData.title);
  }, [modalData]);

  //Zemiau rasome funkcija, kuri issaugotu musu naujai ivesta informacija
  const save = () => {
    setEditData({
      title,

      id: modalData.id,
    });
    //Uzdarome modala. t.y. setiname ji null
    setModalData(null);
  };

  if (null === modalData) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Category</h5>
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card m-4">
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
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button onClick={save} type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCat;
