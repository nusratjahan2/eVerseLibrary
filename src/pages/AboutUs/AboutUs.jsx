import React from 'react'
import aboutUs from '../../assets/aboutUs.avif'

const AboutUs = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <img
            src={aboutUs}
            className="max-w-sm rounded-lg shadow-2xl w-full" />
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 text-xl">
              Welcome to eVerseLibrary, your go-to platform for accessing a vast collection of digital books, research papers, documentations, magazines and many more. We believe in the power of knowledge and aim to make it freely accessible to everyone, anywhere in the world.
            </p>
            <p className="py-6 text-xl">
              Our digital library offers a vast collection of books, articles, and research papers available for free download and online reading. Whether you are a student, researcher, or a book lover, we aim to provide accessible resources for learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs