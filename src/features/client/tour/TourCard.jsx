import { FaBus } from 'react-icons/fa';
import { FaPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TourCard = ({ id, image, title, price, startDate, duration }) => {
    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-500 transform hover:scale-110 hover:shadow-xl">
            <Link
                to={`/tour/${encodeURIComponent(id)}?tourName=${encodeURIComponent(
                    'tour-mang-lai-trai-nghiem-tuyet-voi'
                )}`}
            >
                {/* Hình ảnh của tour */}
                <img src={image} alt="Tour Image" className="w-full h-48 object-cover rounded-lg" />

                {/* Thông tin về tour */}
                <div className="mt-4">
                    {/* Tên tour */}
                    <h3 className="text-lg font-bold text-purple-900 text-start">{title}</h3>
                    <div className="flex space-x-2">
                        <FaBus />
                        <FaPlane />
                    </div>

                    {/* Lịch khởi hành và thời gian tour */}
                    <div className="mt-2 text-gray-600 text-sm">
                        <div className="flex items-center">
                            <span className="mr-2">📅</span>
                            <span>Lịch khởi hành: {startDate}</span>
                        </div>
                        <div className="flex items-center mt-1">
                            <span className="mr-2">📆</span>
                            <span>Thời gian: {duration}</span>
                        </div>
                    </div>

                    {/* Giá và nút đặt phòng */}
                    <div className="flex items-center">
                        <p className="mt-4 text-purple-700 font-bold text-xl w-[50%]">{formatPrice(price)}</p>
                        <button className="w-[50%] mt-4 bg-purple-600 text-white p-2 rounded-md">ĐẶT PHÒNG</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TourCard;
