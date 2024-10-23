import React from 'react'
import Sidebar from './Sidebar'
import { CiBookmark } from "react-icons/ci";

const Blogs = () => {
    return (
        <div className='flex justify-between'>
            {/* sidebar */}
            <Sidebar></Sidebar>
            {/* blog cards */}
            <div className='container mx-5 grid grid-cols-2 gap-5 mt-5'>
                <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

                    <div class="p-6">
                        <div>
                            <span class="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">
                            <CiBookmark />
                        
                            </span>
                            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">Top 10 Must-Read Classics in Our Digital Collection</a>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Classic literature is timeless, offering readers a glimpse into different cultures, histories, and human emotions that remain relevant even today. If you're looking to dive into the world of literary masterpieces, here are 10 must-read classics fromour collection...</p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                                </div>
                                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">12 OCT 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img class="object-cover w-full h-64" src="https://www.elibrarysoftware.com/img/blog/11.jpg" />

                    <div class="p-6">
                        <div>
                            <span class="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">
                            <CiBookmark />
                            </span>
                            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">Join Our 30-Day Reading Challenge: Read 5 Books in a Month</a>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">For 30 days, the goal is simple — read 5 books by the end of the month. You can choose books that have been sitting on your "wishlist" list, or take this opportunity to explore something completely new. Whether it’s fiction, non-fiction, self-help, or poetry...</p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                                </div>
                                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img class="object-cover w-full h-64" src="https://www.elibrarysoftware.com/img/blog/11.jpg" />

                    <div class="p-6">
                        <div>
                            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                                </div>
                                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

                    <div class="p-6">
                        <div>
                            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                                </div>
                                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

                    <div class="p-6">
                        <div>
                            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                                </div>
                                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

                    <div class="p-6">
                        <div>
                            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                                </div>
                                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogs