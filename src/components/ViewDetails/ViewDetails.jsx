import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToLocalStorage, addToLocalStorageWishList } from '../../utility/storeLocalStorage';

const ViewDetails = () => {

    const handleStoreData = (id) => {
        addToLocalStorage(id)
    };

    const handleWishlistBooks = (id) => {
        addToLocalStorageWishList(id);
    }

    const { bookId } = useParams()
    const selectForViewBooks = useLoaderData()

    const selectedBook = selectForViewBooks.find(book => book.id === parseInt(bookId));

    if (!selectedBook) {
        return <p>Book not found.</p>;
    }

    const { book_name, author, image, rating, category, categories, review, total_page, publisher, id } = selectedBook

    return (
        <>

            <section className='container mx-auto mt-12 px-4 xl:px-0'>
                <div className='md:flex items-center'>
                    <div className="left_img md:w-5/12 flex justify-center items-center">
                        <img className='w-[180px] md:w-[280px] md:h-[350px]' src={image} alt={book_name} />
                    </div>
                    <div className="right_details md:w-7/12 mt-5 md:mt-0">
                        <h2 className='text-2xl md:text-4xl font-bold'>{book_name}</h2>
                        <h3 className='text-xl font-semibold mt-3'>By: {author}</h3>
                        <div className="divider"></div>
                        <h3 className='font-bold text-lg'>{category}</h3>
                        <div className="divider"></div>
                        <h2 className='py-3'><strong>Review: </strong>{review}</h2>

                        <div className='flex gap-5 pb-3'>
                            <h2><strong className='text-xl'>Tags: </strong></h2>
                            <div className='flex items-center gap-3'>
                                {/* <p>#REja</p>
                                <p>#REja</p> */}
                                {categories.map((tag, index) => (
                                    <p key={index} className='font-bold'>#{tag}</p>
                                ))}
                            </div>
                        </div>
                        <p className='mt-2'>Number of Pages: <strong className='ml-4'>{total_page}</strong></p>
                        <p className='mt-2'>Publisher: <strong className='ml-4'>{publisher}</strong></p>
                        <p className='mt-2'>Rating: <strong className='ml-4'>{rating}</strong></p>

                        <div className='mt-4'>
                            <button
                                onClick={() => { handleStoreData(id) }}
                                className='btn  border-green-100 border-2 px-8 hover:bg-lime-200'>Read</button>
                            <button
                                onClick={() => { handleWishlistBooks(id) }}
                                className='btn ml-3 px-6 bg-green-400 hover:bg-green-500'>Wishlist</button>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default ViewDetails
