import React from 'react'

const FAQ = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-[#6497b1] my-5'>Frequently Asked Questions</h1>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> How do I sign up for the digital library?</div>
                    <div className="collapse-content">
                        <p>
                        You can sign up by clicking the "Sign Up" button on the homepage. You’ll need to provide basic information such as your name and email address to create an account. After verifying your email, you’ll be able to access our full collection.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What types of resources are available in the digital library?</div>
                    <div className="collapse-content">
                        <p>Our collection includes a wide variety of resources, such as:</p>
                        <ul>
                            <li>eBooks</li>
                            <li>Audio Books</li>
                            <li>Magazines and newspapers</li>
                            <li>Research Papers</li>
                            <li>Documentation</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Can I share downloaded books with others?</div>
                    <div className="collapse-content">
                        <p>
                        Books and other resources downloaded from the digital library are for personal use only. Sharing copyrighted material without permission is against our policy and may violate copyright laws.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ