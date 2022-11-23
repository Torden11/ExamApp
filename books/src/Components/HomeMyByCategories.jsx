// import { useEffect, useState } from "react";
// import axios from "axios";

// function Home() {
//   const [list, setList] = useState(null);

//   useEffect(() => {
//     axios.get("http://localhost:3003/server/all").then((res) => {
//       console.log(res.data);
//       setList(reList(res.data));
//     });
//   }, []);

//   const reList = (data) => {
//     const d = new Map();
//     data.forEach((line) => {
//       if (d.has(line.cat)) {
//         d.set(line.cat, [...d.get(line.cat), line]);
//       } else {
//         d.set(line.cat, [line]);
//       }
//     });
//     return [...d];
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-10">
//           <div className="card m-4">
//             <h5 className="card-header">Movies list</h5>
//             <div className="card-body">
//               <ul className="list-group">
//                 {list?.map((c) => (
//                   <li key={c[0]} className="list-group-item">
//                     <h2>{c[0]}</h2>
//                     <ul className="list-group">
//                       {c[1].map((m) => (
//                         <li key={m.id} className="list-group-item">
//                           <div className="home_content">
//                             <div className="home_content_title">
//                               {m.image ? (
//                                 <div className="img-bin">
//                                   <img
//                                     src={m.image}
//                                     alt={m.title}
//                                   ></img>
//                                 </div>
//                               ) : (
//                                 <span className="red-image">No image</span>
//                               )}
//                             </div>
//                             <div className="home_content_title">{m.title}</div>
//                             <div className="home_content_price">{m.price}</div>
//                             <div className="home_content_info">{m.rating}</div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
