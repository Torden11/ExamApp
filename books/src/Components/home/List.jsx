import { useState } from "react";
import { useContext, useEffect } from "react";
import Home from "../../Contexts/Home";
import Line from "./Line";

// const sortData = [
//   { value: "default", title: "Default" },
//   { value: "price_asc", title: "Price 1-9" },
//   { value: "price_desc", title: "Price 9-1" },
//   { value: "rate_asc", title: "Rating 1-9" },
//   { value: "rate_desc", title: "Rating 9-1" },
// ];

function List() {
  const { books, setBooks, filterOn, filterWhat } = useContext(Home);
  // const [sortBy, setSortBy] = useState("default");
  // const [searchBooks, setSearchBooks] = useState("");
  // const [selectBook, setSelectBook] = useState(null);
  const [stats, setStats] = useState({bookCount: null});

  const resetFilter = () => {
    setBooks((b) => b.map((bo) => ({ ...bo, show: true })));
    filterOn.current = false;
    filterWhat.current = null;
  };

  useEffect (() => {
    if(null === books) {
        return;
    }
    setStats(s => ({...s, bookCount: books.length}));
  }, [books]);

  // useEffect(() => {
  //   switch (sortBy) {
  //     case "price_asc":
  //       setBooks((b) => [...b].sort((a, b) => a.price - b.price));
  //       break;
  //     case "price_desc":
  //       setBooks((b) => [...b].sort((b, a) => a.price - b.price));
  //       break;
  //     case "rate_asc":
  //       setBooks((b) => [...b].sort((a, b) => a.rating - b.rating));
  //       break;
  //     case "rate_desc":
  //       setBooks((b) => [...b].sort((b, a) => a.rating - b.rating));
  //       break;
  //     default:
  //       setBooks((b) => [...b ?? []].sort((a, b) => a.row - b.row));
  //   }
  // }, [sortBy, setBooks]);

//   const handleChange = (e) => {
//     setSearchBooks(e.target.value);
//   };

//   useEffect (() => {
//     if(searchBooks.length> 2)
//     setBooks();
//    }, [searchBooks, setBooks])

//   useEffect (() => {
//      if(searchBooks.length !== 3)
//      {setBooks(null)
//     setSelectBook(null)}
//     }, [searchBooks, setBooks])   
// console.log(searchBooks);
  return (
    <>
      <div className="card m-4">
        <h5 className="card-header">Search book</h5>
        <div className="card-body">
        <div className="mb-3" style={{textalign: "center"}}>
        <input
        type="text"
        placeholder="Search"
        // value={searchBooks}
        // onChange={handleChange}
        style={{
          minwidth: "400px"
        }}
      ></input>
      </div>
          {/* <div className="mb-3">
            <label className="form-label">Sort by</label>
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortData.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.title}
                </option>
              ))}
            </select>
          </div> */}
        </div>
      </div>
      <div className="card m-4 mx-auto ">
        <h5 className="card-header">
          Books List  <span className="click-link" onClick={resetFilter}>Show all books</span>
          <span>Total number of books: ({stats.bookCount})</span>
        </h5>
        <div className="card-body">
          <ul className="list-group">
            {books?.map((b) =>
              b.show ? <Line key={b.id} book={b}/> : null
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
