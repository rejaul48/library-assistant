import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
                <h1 className="text-9xl font-bold">404</h1>
                <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
                <p className="mt-2 text-lg">
                    Sorry, the page you are looking for does not exist.
                </p>
                <p className="mt-2 text-lg">
                    You can go back to the <Link to='/' className="text-blue-500 hover:underline">homepage</Link>.
                </p>
            </div>
        </>
    )
}

export default ErrorPage
