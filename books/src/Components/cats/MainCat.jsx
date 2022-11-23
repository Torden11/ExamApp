import { useEffect, useState, useContext } from "react";
import Cats from "../../Contexts/Cats";
import CreateCat from "./CreateCat";
import axios from "axios";
import ListCat from "./ListCat";
import EditCat from "./EditCat";
import { authConfig } from "../../Functions/auth";
import DataContext from "../../Contexts/DataContext";

function Main() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [cats, setCats] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const {makeMsg} = useContext(DataContext);

  useEffect(() => {
    axios.get("http://localhost:3003/server/cats", authConfig()).then((res) => {
      setCats(res.data);
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios
      .post("http://localhost:3003/server/cats", createData, authConfig())
      .then((res) => {
        setLastUpdate(Date.now());
        makeMsg(res.data.text, res.data.type);
      });
  }, [createData, makeMsg]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios
      .delete("http://localhost:3003/server/cats/" + deleteData.id, authConfig())
      .then((res) => {
        setLastUpdate(Date.now());
        makeMsg(res.data.text, res.data.type);
      });
  }, [deleteData, makeMsg]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put("http://localhost:3003/server/cats/" + editData.id, editData, authConfig())
      .then((res) => {
        setLastUpdate(Date.now());
        makeMsg(res.data.text, res.data.type);
      });
  }, [editData, makeMsg]);

  return (
    <Cats.Provider
      value={{
        setCreateData,
        cats,
        setDeleteData,
        modalData,
        setModalData,
        setEditData
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CreateCat />
          </div>
          <div className="col-6">
            <ListCat></ListCat>
          </div>
        </div>
      </div>
      <EditCat></EditCat>
    </Cats.Provider>
  );
}

export default Main;
