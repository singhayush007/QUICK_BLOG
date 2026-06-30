import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import StatCard from '../../components/StatCard'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: []
    })

    const { axios } = useAppContext()

    const fetchDashboard = async () => {
        try {
            const { data } = await axios.get('/api/admin/dashboard')
            data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchDashboard()
    }, [])

    return (
        <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>

            <div className='flex flex-wrap gap-4'>
                <StatCard icon={assets.dashboard_icon_1} value={dashboardData.blogs} label="Blogs" />
                <StatCard icon={assets.dashboard_icon_2} value={dashboardData.comments} label="Comments" />
                <StatCard icon={assets.dashboard_icon_3} value={dashboardData.drafts} label="Drafts" />
            </div>

            <div>
                <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
                    <img src={assets.dashboard_icon_4} alt="" />
                    <p>Latest Blogs</p>
                </div>

                <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
                    <table className='w-full text-sm text-gray-500'>
                        <thead className='text-xs text-gray-600 text-left uppercase'>
                            <tr>
                                <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
                                <th scope='col' className='px-2 py-4'> Blog Title </th>
                                <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
                                <th scope='col' className='px-2 py-4 max-sm:hidden'> Status </th>
                                <th scope='col' className='px-2 py-4'> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboardData.recentBlogs.map((blog, index) => (
                                <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
