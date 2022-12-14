import { useContext } from 'react';
import Home from '../../Contexts/Home';

// import { useState } from "react";

function Line({ book }) {

    const { setBooks, filterOn, filterWhat } = useContext(Home);

    // const [rate, setRate] = useState(5);

    // const doRating = () => {
    //     setRateData({
    //         id: book.id,
    //         rate
    //     });
    //     setRate(5);
    // }


    const filter = () => {
        if (filterOn.current){
            setBooks(b => b.map(bo => ({...bo, show: true})));
            filterWhat.current = null;
        } else {
            setBooks(b => b.map(bo => bo.cat_id === book.cat_id ? {...bo, show: true} : {...bo, show: false}));
            filterWhat.current = book.cat_id;
        }
        filterOn.current = !filterOn.current;
    }

    // const add = () => {
    //     // console.log(userId)
    //     setCart();
    //   };

    return (
        <li className="list-group-item">
            <div className="home">
                <div className="home__content">
                    <div className="home__content__info">
                        {book.image ? <div className='img-bin'>
                            <img src={book.image} alt={book.title}>
                            </img>
                        </div> : null}
                    </div>
                    <div className=" home__content__info title-container">
                        <div className="line__content__title">{book.title}</div>
                        <div className="line__content__author">Author: {book.author}</div>
                    </div>
                    <div className="home__content__cat click-link" onClick={filter}>
                        Category: {book.catTitle}
                    </div>

                    {/* <div className="home__content__info">
                        {book.rating ?? 'no rating'}
                        <select value={rate} onChange={e => setRate(e.target.value)}>
                            {
                                [...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)
                            }
                        </select>
                    </div> */}
                    <div className="home__buttons">
                    <button type="button" className="btn btn-outline-success">Book it</button>
                    {/* <button onClick={doRating} type="button" className="btn btn-outline-success">Book it</button> */}
                </div>
                </div>
            </div>
        </li>
    )
}

export default Line;