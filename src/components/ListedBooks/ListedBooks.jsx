import React, { useEffect, useState } from 'react';
import ReadWish from '../ReadWish/ReadWish';
import { useLoaderData } from 'react-router-dom';
import { getStoreReadList, getStoreWishList } from '../../utility/storeLocalStorage';

const ListedBooks = () => {

    // handle sort
    const [sort, setSort] = useState([])

    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoreReadList();
        const readBooksList = allBooks.filter(book => storedReadList.includes(book.id));
        setReadBooks(readBooksList);
    }, [allBooks]);

    useEffect(() => {
        const storedWishList = getStoreWishList();
        const wishBooksList = allBooks.filter(book => storedWishList.includes(book.id));
        setWishBooks(wishBooksList);
    }, [allBooks]);


    // handle sorted functionality
    const handleSort = (sortType) => {
        setSort(sortType)

        if (sortType === "Pages") {
            const sortedList = [...readBooks].sort((a, b) => {
                return b.total_page - a.total_page;

            })

            setReadBooks(sortedList);
            setWishBooks(sortedList)
        }

         else if (sortType === "Ratings") {
            const sortedList = [...wishBooks].sort((a, b) => {
                return b.rating - a.rating;

            })

            setReadBooks(sortedList);
            setWishBooks(sortedList)
        }
    }
    return (
        <div className='container mx-auto px-4 xl:px-0 w-auto'>
            <div className='bg-lime-200 w-10/12 mx-auto py-3 rounded-md mb-8'>
                <h2 className='text-2xl md:text-5xl font-bold text-center'>Books</h2>
            </div>

            <div className='text-center'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-lime-300 hover:bg-lime-500">{sort ? `Sort By ${sort}` : "Sort By"}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => { handleSort("Pages") }}><a>Pages</a></li>
                        <li onClick={() => { handleSort("Ratings") }}><a>Ratings</a></li>
                    </ul>
                </details>
            </div>

            <div className='mt-5 w-[100%]'>
                <div role="tablist" className="tabs tabs-lifted grid-cols-1 md:grid-cols-6">
                    {/* Read Books Tab */}
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                    <div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">
                        {readBooks.map(book => (
                            <ReadWish key={book.id} book={book} />
                        ))}
                    </div>

                    {/* Wishlist Books Tab */}
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" defaultChecked />
                    <div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">
                        {wishBooks.map(book => (
                            <ReadWish key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
