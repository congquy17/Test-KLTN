import background from '../assets/logo/logo.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function SidebarAdmin() {
    const [isTourMenuOpen, setIsTourMenuOpen] = useState(false); // State to toggle the dropdown
    const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false); // State to toggle the dropdown
    const user = useSelector((state) => state.client.user);
    return (
        <>
            <aside className="w-64 text-black p-5">
                <div className="flex items-center justify-center">
                    <a href="">
                        <img src={background} className="mb-5"></img>
                    </a>
                </div>
                <div className="flex">
                    <a href="">
                        <img
                            src={
                                user
                                    ? user.user.avatar
                                    : 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-30.jpg'
                            }
                            className="w-16 h-16 rounded-full"
                        ></img>
                    </a>
                    <a href="" className="text-lg font-semibold mb-10 text-center ml-4 mt-2">
                        <h2>Khánh Huyền</h2>
                        <p className="text-[12px] opacity-[0.8] mt-[-5px]">admin </p>
                    </a>
                </div>

                <nav>
                    <ul>
                        {/* Dashboard with full width */}
                        <li className="mb-4">
                            <Link
                                to="/admin"
                                className="block w-full py-2 px-4 bg-[#C499F3] text-center text-black rounded-md hover:bg-[#C499F9] border border-transparent hover:border-gray-300"
                            >
                                Dashboard
                            </Link>
                        </li>

                        {/* Quản lý Tour (Dropdown) */}
                        <li
                            className="mb-4 hover:bg-[#C499F9] p-2 rounded cursor-pointer flex justify-between items-center"
                            onClick={() => setIsTourMenuOpen(!isTourMenuOpen)}
                        >
                            <span>Quản lý Tour</span>
                            <FaAngleDown
                                className={`ml-2 text-black inline-block transform transition-transform duration-300 ${
                                    isTourMenuOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                            />
                        </li>

                        {/* Dropdown Menu */}
                        {isTourMenuOpen && (
                            <ul className="pl-6 space-y-2">
                                <li className="rounded">
                                    <Link to="/tour-add" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                        Thêm Tour
                                    </Link>
                                </li>
                                <li className="rounded">
                                    <Link to="/tour-list" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                        Danh Sách Tour
                                    </Link>
                                </li>
                                <li className="rounded">
                                    <Link to="/tour-category" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                        Danh Mục
                                    </Link>
                                </li>
                            </ul>
                        )}

                        <li className="mb-4 rounded">
                            <Link
                                to="/tour-news"
                                className="block w-full p-2 hover:bg-[#C499F9] rounded"
                                onClick={() => setIsBlogMenuOpen(!isBlogMenuOpen)}
                            >
                                Tin Tức
                            </Link>
                        </li>
                        {/* Dropdown Menu */}
                        {isBlogMenuOpen && (
                            <ul className="pl-6 space-y-2">
                                <li className="rounded">
                                    <Link to="/tour-add" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                        Thêm Blog
                                    </Link>
                                </li>
                                <li className="rounded">
                                    <Link to="/tour-list" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                        Danh Sách Blog
                                    </Link>
                                </li>
                                <li className="rounded">
                                    <Link to="/tour-category" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                        Danh Mục
                                    </Link>
                                </li>
                            </ul>
                        )}
                        <li className="mb-4 rounded">
                            <Link to="/tour-contact" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                Liên Hệ
                            </Link>
                        </li>
                        <li className="mb-4 rounded">
                            <Link to="/support-customer" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                Hỗ trợ khách hàng
                            </Link>
                        </li>
                        <li className="mb-4 rounded">
                            <Link to="/signin" className="block w-full p-2 hover:bg-[#C499F9] rounded">
                                Đăng xuất
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
