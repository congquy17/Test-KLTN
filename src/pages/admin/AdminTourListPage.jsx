import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import các icon cho nút sửa và xóa
import userApi from '../../api/userApi'; // Import userApi để gọi API lấy tất cả các tour
import adminApi from '../../api/adminApi'; // Import adminApi để gọi API xóa tour
import { toast } from 'react-toastify';

const AdminTourListPage = () => {
    const [tours, setTours] = useState([]); // Lưu danh sách các tour
    const [categories, setCategories] = useState([]); // Lưu danh sách danh mục
    const [selectedCategory, setSelectedCategory] = useState(''); // Lưu danh mục được chọn

    // Function to fetch all tours
    const fetchAllTours = async () => {
        try {
            const response = await userApi.getAllTours(); // Gọi API lấy tất cả các tour
            setTours(response.data); // Giả sử response chứa mảng các tour
            console.log('Tours:', response.data);
        } catch (error) {
            console.error('Error fetching tours:', error);
        }
    };

    // Fetch all tours on component mount
    useEffect(() => {
        fetchAllTours(); // Fetch tất cả các tour khi component được mount
    }, []); // Chỉ chạy khi component được render lần đầu

    const fetchAllCategories = async () => {
        try {
            const response = await adminApi.getAllCategories(); // Gọi API lấy danh sách
            setCategories(response); // Lưu danh sách vào state
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchAllCategories(); // Fetch danh sách danh mục khi component được mount
    }, []);

    // Function to format the date in dd-mm-yyyy format
    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
    };

    // Handle Edit tour
    const handleEdit = (id) => {
        console.log(`Sửa tour với ID: ${id}`);
    };

    // Handle Delete tour
    const handleDelete = async (id, name) => {
        try {
            const isConfirmed = window.confirm(`Bạn có chắc chắn muốn xóa tour với ID: ${name}?`);
            if (!isConfirmed) return;
            // Giả sử bạn có API xóa tour
            await adminApi.deleteTour(id); // Gọi API xóa tour
            setTours(tours.filter((tour) => tour.tourId !== id)); // Xóa tour khỏi danh sách
            console.log(`Xóa tour với name: ${name}`);
            toast.success(`Xóa tour thành công ${name}`);
        } catch (error) {
            console.error('Error deleting tour:', error);
            toast.error(`Xóa tour thất bại ${id}`);
        }
    };

    // Lọc các tour theo danh mục đã chọn
    const filteredTours = selectedCategory ? tours.filter((tour) => tour.categoryName === selectedCategory) : tours; // Nếu không có danh mục nào được chọn, sẽ hiển thị tất cả các tour

    return (
        <div className="container h-full w-full">
            <div className="flex mb-4 items-center justify-between">
                <h2 className="text-xl font-semibold">Danh sách Tour</h2>
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên tour..."
                    className="py-1 px-2 w-[25%] text-[15px] border border-gray-300 rounded-lg mr-4 outline-none"
                />
                <select
                    className="px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)} // Cập nhật state khi chọn danh mục
                >
                    <option value="">Danh mục</option>
                    {categories.map((category) => (
                        <option key={category.categoryId} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="overflow-x-auto bg-white mt-2">
                <table className="min-w-full shadow-md rounded-lg">
                    <thead>
                        <tr className="text-left text-sm font-medium">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Tên Tour</th>
                            <th className="px-4 py-2">Mô tả</th>
                            <th className="px-4 py-2">Điểm đến</th>
                            <th className="px-4 py-2">Hình ảnh</th>
                            <th className="px-4 py-2">Giá</th>
                            <th className="px-4 py-2">Ngày bắt đầu</th>
                            <th className="px-4 py-2">Ngày kết thúc</th>
                            <th className="px-4 py-2">Danh mục</th>
                            <th className="px-4 py-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTours.map((tour) => (
                            <tr key={tour.tourId} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-2">{tour.tourId}</td>
                                <td className="px-4 py-2">{tour.name}</td>
                                <td className="px-4 py-2">{tour.description}</td>
                                <td className="px-4 py-2">{tour.destination}</td>
                                <td className="px-4 py-2">
                                    <img src={tour.images} alt={tour.name} className="w-12 h-12 object-cover rounded" />
                                </td>
                                <td className="px-4 py-2">{tour.price.toLocaleString()} VND</td>
                                <td className="px-4 py-2">{formatDate(tour.startDate)}</td>
                                <td className="px-4 py-2">{formatDate(tour.endDate)}</td>
                                <td className="px-4 py-2">{tour.categoryName}</td>
                                <td className="px-2 py-2">
                                    <button
                                        onClick={() => handleEdit(tour.tourId)}
                                        className="text-blue-500 hover:text-blue-700 mr-3 py-1 pl-1"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(tour.tourId, tour.name)}
                                        className="text-red-500 hover:text-red-700 py-1 pr-1"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTourListPage;
