import React, { useEffect, useState } from 'react'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const FILTERS = ['Approved', 'Not Approved']

const Comments = () => {

    const [comments, setComments] = useState([])
    const [filter, setFilter] = useState('Not Approved')
    const { axios } = useAppContext()

    const fetchComments = async () => {
        try {
            const { data } = await axios.get('/api/admin/comments')
            data.success ? setComments(data.comments) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [])

    const filteredComments = comments.filter((c) =>
        filter === 'Approved' ? c.isApproved === true : c.isApproved === false
    )

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
            <div className='flex justify-between items-center max-w-3xl'>
                <h1 className='text-lg font-semibold text-gray-700'>Comments</h1>
                <div className='flex gap-4'>
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === f ? 'text-primary' : 'text-gray-700'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
                <table className="w-full text-sm text-gray-500">
                    <thead className="text-xs text-gray-700 text-left uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3"> Blog Title & Comment </th>
                            <th scope="col" className="px-6 py-3 max-sm:hidden"> Date </th>
                            <th scope="col" className="px-6 py-3"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredComments.length > 0
                            ? filteredComments.map((comment, index) => (
                                <CommentTableItem key={comment._id} comment={comment} index={index + 1} fetchComments={fetchComments} />
                            ))
                            : (
                                <tr>
                                    <td colSpan={3} className='text-center py-8 text-gray-400'>No {filter.toLowerCase()} comments.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Comments
