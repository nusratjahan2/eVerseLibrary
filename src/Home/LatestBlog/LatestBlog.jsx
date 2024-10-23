import React from 'react'

const LatestBlog = () => {
    return (
        <div className='mt-8 mb-16'>
            <h1 className='text-3xl font-bold text-center text-[#6497b1]'>Latest Blogs</h1>
            <p></p>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='h-full w-full'
                            src="https://i.pinimg.com/originals/b8/51/ef/b851ef38d67433b83d79fa05601d2b4f.jpg"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">The Future of Digital Libraries: AI, Blockchain, and Open Access</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium, a perferendis iure quos tempore?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                        className='h-full'
                            src="https://www.elibrarysoftware.com/img/blog/11.jpg"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Join Our 30-Day Reading Challenge: Read 5 Books in a Month</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores placeat aliquam recusandae. Eum, enim.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog