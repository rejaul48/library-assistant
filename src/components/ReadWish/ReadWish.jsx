import React from 'react';
import { Link } from 'react-router-dom';

const ReadWish = ({ book }) => {
    // If book data is not provided, do not render the component
    if (!book) return <p>Loading...</p>;

    const { book_name, author, image, rating, category, categories, total_page, publisher } = book;

    return (
        <div>
            <div className='md:flex bg-green-300 bg-opacity-30 rounded-lg py-2 mt-3 px-4 xl:px-0'>
                <div className='md:w-1/12 m-5 flex justify-center items-center'>
                    <img className='w-[100px]' src={image} alt="read/wishlist books" />
                </div>
                <div className='md:w-11/12'>
                    <h2 className='font-bold text-xl'>{book_name}</h2>
                    <p>By: {author}</p>
                    <div className='flex gap-5 pt-2'>
                        <p>Tags: </p>
                        <div className='flex gap-2'>
                            {categories.map((tag, index) => (
                                <p key={index} className='font-bold'>#{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center gap-3 py-2'>
                        <h3>Publisher: {publisher}</h3>
                        <p>Total pages: {total_page}</p>
                    </div>
                    <div className=' grid grid-cols-12 gap-2 mt-2 text-center items-center'>
                        <div className='bg-green-300 py-2 px-3 rounded-lg bg-opacity-45 col-span-6 md:col-span-4 text-xs md:text-sm font-bold'>Category: {category}</div>
                        <div className='bg-green-300 px-3 rounded-lg bg-opacity-45 col-span-6 md:col-span-4 text-xs md:text-sm font-bold py-4'>Rating: {rating}</div>
                        <Link to={`/details/${book.id}`} className='bg-lime-300 px-3 py-3 rounded-lg col-span-12 md:col-span-4'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadWish;
