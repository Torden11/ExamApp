import Home from "../../Contexts/Home";
import List from "./List";
import { useState, useEffect, useRef} from "react";
import axios from "axios";
import { authConfig } from "../../Functions/auth";



function MainHome() {
  const [lastUpdate] = useState(Date.now());
  const [books, setBooks] = useState(null);
  // const [cart, setCart]= useState(null);
  const filterOn = useRef(false);
  const filterWhat = useRef(null);
  

  // READ for list
  useEffect(() => {
    axios.get("http://localhost:3003/home/books", authConfig()).then((res) => {
      if (filterOn.current) {
        setBooks(
          res.data.map((d, i) =>
            filterWhat.current === d.cat_id
              ? { ...d, show: true, row: i }
              : { ...d, show: false, row: i }
          )
        );
      } else {
        setBooks(res.data.map((d, i) => ({ ...d, show: true, row: i })));
      }
    });
  }, [lastUpdate]);

  

  // useEffect(() => {
  //   if (null === rateData) {
  //     return;
  //   }
  //   axios
  //     .put("http://localhost:3003/home/books/" + rateData.id, rateData, authConfig())
  //     .then((res) => {
  //       setLastUpdate(Date.now());
  //     });
  // }, [rateData]);

  return (
    <Home.Provider
      value={{
        books,
        // setRateData,
        setBooks,
        filterOn,
        filterWhat,
        //  cart,
        //  setCart
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <List />
          </div>
        </div>
      </div>
    </Home.Provider>
  );
}

export default MainHome;
