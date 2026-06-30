import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const NAV_ITEMS = [
    { to: '/admin', label: 'Dashboard', icon: assets.home_icon, end: true },
    { to: '/admin/addBlog', label: 'Add blogs', icon: assets.add_icon },
    { to: '/admin/listBlog', label: 'Blog lists', icon: assets.list_icon },
    { to: '/admin/comments', label: 'Comments', icon: assets.comment_icon },
]

const Sidebar = () => {
    return (
        <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
            {NAV_ITEMS.map(({ to, label, icon, end }) => (
                <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-primary'}`
                    }
                >
                    <img src={icon} alt={label} className='min-w-4 w-5' />
                    <p className='hidden md:inline-block'>{label}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar
