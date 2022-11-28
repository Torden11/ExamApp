// import Cart from "../../Contexts/Cart";
// import List from "./List";
// import { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { authConfig } from '../../Functions/auth';
// import DataContext from "../../Contexts/DataContext";

// function Main() {

//     const [lastUpdate, setLastUpdate] = useState(Date.now());
//     const [books, setBooks] = useState(null);
//     const [cart, setCart] = useState(null);
//     const { makeMsg, userId } = useContext(DataContext);


//     // READ for list
//     useEffect(() => {
//         axios.get('http://localhost:3003/books/noorders/'+ userId, authConfig())
//             .then(res => {
//                 setBooks(res.data);
//             })
//     }, [lastUpdate, userId]);

//     useEffect(() => {
//         if (null === cart) {
//             return;
//         }
//         axios.delete('http://localhost:3003/server/cart/' + cart.id, authConfig())
//             .then(res => {
//                 setLastUpdate(Date.now());
//                 makeMsg(res.data.text, res.data.type);
//             })
//     }, [cart, makeMsg]);

//     return (
//         <Cart.Provider value={{
//             setCart,
//             books
//         }}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <List />
//                     </div>
//                 </div>
//             </div>
//         </Cart.Provider>
//     );
// }

// export default Main;