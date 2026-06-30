import React, { useState } from 'react'
import BlogCard from './BlogCard'
import CategoryFilter from './CategoryFilter'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
    const { blogs, input } = useAppContext()

    const filteredBlogs = blogs
        .filter((blog) =>
            input === ''
                ? true
                : blog.title.toLowerCase().includes(input.toLowerCase()) ||
                  blog.category.toLowerCase().includes(input.toLowerCase())
        )
        .filter((blog) => menu === "All" ? true : blog.category === menu)

    return (
        <div>
            <CategoryFilter activeCategory={menu} onSelect={setMenu} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                {filteredBlogs.length > 0
                    ? filteredBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
                    : <p className='text-gray-400 col-span-full text-center py-10'>No blogs found.</p>
                }
            </div>
        </div>
    )
}

export default BlogList
