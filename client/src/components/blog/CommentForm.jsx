import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext'

const CommentForm = ({ blogId, onCommentAdded }) => {
  const { axios } = useAppContext()
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/blog/add-comment', { blog: blogId, name, content })
      if (data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
        onCommentAdded?.()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='max-w-3xl mx-auto'>
      <p className='font-semibold mb-4'>Add your comment</p>
      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-4 max-w-lg'>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder='Name'
          required
          className='w-full p-2 border border-gray-300 rounded outline-none'
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Comment'
          className='w-full p-2 border border-gray-300 rounded outline-none h-48'
          required
        />
        <button type="submit" className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default CommentForm
