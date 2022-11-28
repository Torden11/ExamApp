import { useEffect } from "react";
import { useState } from "react";
import Books from "../../Contexts/Books";
import Create from "./Create";
import axios from "axios";
import List from "./List";
import Edit from "./Edit";
import { authConfig } from "../../Functions/auth";
import DataContext from "../../Contexts/DataContext";
import { useContext } from "react";

function Main() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [books, setBooks] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const {makeMsg} = useContext(DataContext);

  const [cats, setCats] = useState(null);

  // READ for select
  useEffect(() => {
   axios.get('http://localhost:3003/server/cats', authConfig())
       .then(res => {
           setCats(res.data);
       })
}, []);

// READ for list
useEffect(() => {
   axios.get('http://localhost:3003/server/books',authConfig())
       .then(res => {
           setBooks(res.data);
       })
}, [lastUpdate]);

useEffect(() => {
   if (null === createData) {
       return;
   }
   axios.post('http://localhost:3003/server/books', createData, authConfig())
       .then(res => {
           setLastUpdate(Date.now());
           makeMsg(res.data.text, res.data.type);
       });
}, [createData, makeMsg]);


  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios
      .delete("http://localhost:3003/server/books/" + deleteData.id, authConfig())
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
      .put("http://localhost:3003/server/books/" + editData.id, editData, authConfig())
      .then((res) => {
        setLastUpdate(Date.now());
        makeMsg(res.data.text, res.data.type);
      });
  }, [editData, makeMsg]);

  return (
    <Books.Provider
      value={{
        cats,
        setCreateData,
        books,
        setDeleteData,
        modalData,
        setModalData,
        setEditData
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto">
            <Create />
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 mx-auto">
            <List></List>
          </div>
        </div>
      </div>
      <Edit></Edit>
    </Books.Provider>
  );
}

export default Main;
