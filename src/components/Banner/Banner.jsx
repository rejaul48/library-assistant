import React from 'react'

const Banner = () => {
    return (
        <div className='container mx-auto'>

            <div className="hero mt-8">
                <div className="hero-content flex-col lg:flex-row-reverse bg-green-300 bg-opacity-20 p-12 rounded-lg">
                    <div className='hero_img lg:w-4/12 flex items-center'>
                        <img
                            src="https://i.imgur.com/iJNPcoy.png"
                            className="h-[250px] md:h-auto " />
                    </div>
                    <div className='hero_text lg:w-8/12 '>
                        <div className=' w-10/12 mx-auto'>
                            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold md:w-4/6 leading-tight ">Books to freshen up your bookshelf</h1>

                            <button className="btn bg-[#23BE0A] px-12 mt-5 text-white flex hover:bg-lime-600">View to List</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
