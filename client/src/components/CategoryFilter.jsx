import React from 'react'
import { motion } from 'motion/react'
import { BLOG_CATEGORIES } from '../utils/constants'

const CategoryFilter = ({ activeCategory, onSelect }) => {
  return (
    <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
      {BLOG_CATEGORIES.map((item) => (
        <div key={item} className='relative'>
          <button
            onClick={() => onSelect(item)}
            className={`cursor-pointer text-gray-500 ${activeCategory === item && 'text-white px-4 pt-0.5'}`}
          >
            {item}
            {activeCategory === item && (
              <motion.div
                layoutId='underline'
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'
              />
            )}
          </button>
        </div>
      ))}
    </div>
  )
}

export default CategoryFilter
