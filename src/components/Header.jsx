import { CiUser } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import logo from '../assets/logo/logo.jpg';
import { TbListDetails } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/clientSlice';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const user = useSelector((state) => state.client.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // State for controlling the visibility of the account menu
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Handle account menu toggle
    const handleAccountMenuToggle = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };

    const handleLogOut = () => {
        // Your logout logic here, such as clearing user data or calling an action
        console.log('Logging out...');
        dispatch(logout()); // Example dispatch action for logout

        setIsAccountMenuOpen(false); // Close the account menu
        navigate('signin'); // Redirect to the login page
    };

    // Lưu trạng thái chế độ sáng/tối vào localStorage khi thay đổi
    useEffect(() => {
        if (isDarkMode) {
            console.log('Dark mode enabled');
            document.documentElement.classList.add('dark');
        } else {
            console.log('Dark mode disabled');
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <header className="container mx-auto  bg-white shadow-md dark:bg-gray-800">
            <div className=" flex justify-between items-center p-4">
                {/* Logo */}
                <a className="flex items-center space-x-2" href="/">
                    <img src={logo} alt="Logo" className="w-[230px]" />
                </a>

                {/* Search Bar */}
                <div className="flex items-center w-1/3 relative">
                    <input
                        type="text"
                        placeholder="Nhập tên điểm đến hoặc thành phố"
                        className="w-full px-4 py-2 border-2 rounded-full outline-none "
                        style={{ borderColor: '#33186B' }}
                    />
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6 text-gray-700 dark:text-white">
                    {/* Account */}
                    <div className="relative">
                        <a
                            href="#"
                            className="flex items-center space-x-1 hover:cursor-pointer"
                            onClick={handleAccountMenuToggle}
                        >
                            <img
                                src={
                                    user && user.user
                                        ? user.user.avatar
                                        : 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-30.jpg'
                                }
                                alt="User Avatar"
                                className="border rounded-full w-8 h-8"
                            />
                            <span>{user ? user.user.name : 'tai khoan'}</span>
                        </a>

                        {/* Dropdown Menu */}
                        {isAccountMenuOpen && (
                            <div className="absolute  mt-2 bg-white shadow-md rounded-lg border p-2 w-48 z-10 ">
                                <a href="/account-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                    Chi tiết tài khoản
                                </a>
                                <a
                                    href="/signin"
                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={handleLogOut}
                                >
                                    Đăng xuất
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Favorite */}
                    <div className="relative flex items-center space-x-1 hover:cursor-pointer">
                        <FaRegHeart className="text-3xl" />
                        <span>Yêu thích</span>
                        <span className="absolute bottom-5 right-0 bg-yellow-500 text-xs rounded-full px-2 py-1">
                            0
                        </span>
                    </div>

                    {/* Cart */}
                    <div
                        className="relative flex items-center space-x-1 hover:cursor-pointer"
                        onClick={() => navigate('/cart')}
                    >
                        <HiOutlineShoppingBag className="text-3xl" />
                        <span>0</span>
                    </div>
                    <div
                        className="relative flex items-center space-x-1 hover:cursor-pointer"
                        onClick={() => navigate('/booked-tour')}
                    >
                        <TbListDetails className="text-2xl" />
                    </div>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full"
                    >
                        {isDarkMode ? '🌙' : '🌞'}
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-gray-100 py-2 dark:bg-gray-800 dark:text-white">
                <div className="container mx-auto flex justify-center space-x-8 text-gray-700 font-semibold">
                    <a href="/" className="hover:text-indigo-900 dark:text-white">
                        TRANG CHỦ
                    </a>
                    <a href="/about" className="hover:text-indigo-700 dark:text-white">
                        GIỚI THIỆU
                    </a>
                    <a href="/tours" className="hover:text-indigo-700 dark:text-white">
                        TOUR DU LỊCH
                    </a>
                    <a href="/hotels" className="hover:text-indigo-700 dark:text-white">
                        PHÒNG KHÁCH SẠN
                    </a>
                    <a href="/news" className="hover:text-indigo-700 dark:text-white">
                        TIN TỨC
                    </a>
                    <a href="/contact" className="hover:text-indigo-700 dark:text-white">
                        LIÊN HỆ
                    </a>
                </div>
            </nav>
        </header>
    );
}
