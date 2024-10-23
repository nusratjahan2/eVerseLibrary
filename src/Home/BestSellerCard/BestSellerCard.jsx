import React from 'react'

const BestSellerCard = () => {
    return (
        <div>
            <div className="card bg-base-100 image-full w-1/2 shadow-xl">
                <figure>
                    <img
                        src="https://img.freepik.com/premium-photo/stack-five-old-books-solid-gray-background-books-are-different-sizes-colors-top-book-is-open_14117-501223.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-5xl">Best Seller Books</h2>
                    <p className='text-3xl'>of the month</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellerCard
