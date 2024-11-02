// PagesToRead.jsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data structure for ReadBooks and Wishlist
const ReadBooks = [
    { name: 'Book A', total_page: 300 },
    { name: 'Book B', total_page: 150 },
    // Add more read books as needed
];

const WishlistBooks = [
    { name: 'Book C', total_page: 450 },
    { name: 'Book D', total_page: 200 },
    // Add more wishlist books as needed
];

const PagesToRead = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Calculate the total pages for read books
        const readPages = ReadBooks.map(book => book.total_page);
        const totalReadPages = readPages.reduce((total, pages) => total + pages, 0);

        // Calculate the total pages for wishlist books
        const wishlistPages = WishlistBooks.map(book => book.total_page);
        const totalWishlistPages = wishlistPages.reduce((total, pages) => total + pages, 0);

        // Create the data for the chart
        const data = [
            { name: 'Read Books', pages: totalReadPages },
            { name: 'Wishlist Books', pages: totalWishlistPages },
            { name: 'Total Pages to Read', pages: totalReadPages + totalWishlistPages },
        ];

        setChartData(data);
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <section className="container mx-auto mt-12 px-4">
            <div className="w-full max-w-7xl mx-auto">
                {/* Responsive container */}
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pages" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default PagesToRead;
