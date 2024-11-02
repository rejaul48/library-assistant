import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Book } from '../Book/Book';

const Books = () => {

    const allBooks = useLoaderData();

    return (
        <>

            <section className='container mx-auto mb-24 mt-12 px-4 xl:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        allBooks.map(book => <Book
                            key={book.id}
                            book={book}
                        ></Book>)
                    }
                </div>

            </section>
        </>
    )
}

export default Books
