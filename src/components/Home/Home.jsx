import React from 'react'
import Banner from '../Banner/Banner'
import Books from '../Books/Books'


const Home = () => {

    return (
        <>
            <Banner ></Banner>
            <div className='container mx-auto Seciton_head'>
                <h2 className='text-3xl font-bold text-center mt-14'>Books</h2>
            </div>
            <Books ></Books>
        </>
    )
}

export default Home
