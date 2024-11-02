import React from 'react';
import { Link } from 'react-router-dom';

export const Book = ({ book }) => {

    const { book_name, author, image, rating, category, categories,id } = book

    return (


        <Link to={`/details/${id}`}>
            <div className='border-2 rounded-lg p-4 shadow-xl cursor-pointer'>
                <div className="card">
                    <figure className='bg-lime-200 bg-opacity-15 py-5'>
                        <img className='w-auto mx-auto h-[250px] rounded-xl' src={image} alt="Bookimg" />
                    </figure>
                    <div className="card-body p-2 mt-2">
                        <div className='flex justify-around items-center px-6 text-center gap-12  text-green-600'>
                            {
                                categories.map((cata, ind) => (
                                    <p className='bg-green-200 py-3 px- lg:px-4 rounded-full bg-opacity-30' key={ind}>
                                        {
                                            cata
                                        }
                                    </p>
                                ))
                            }
                        </div>
                        <h2 className="text-2xl font-semibold mt-2">{book_name}</h2>
                        <h3 className='text-lg'>By: {author}</h3>
                        <div className='border-b-gray-200 border-dashed border my-2'></div>
                        <div className='flex justify-between items-center'>
                            <p>{category}</p>
                            <p className='flex gap-1 items-center text-right justify-end'>{rating} <span><img className='w-4' src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" /></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
}
