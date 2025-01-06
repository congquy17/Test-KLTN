import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import userApi from '../../api/userApi'; // Đảm bảo bạn đã import axios client

const TourDetail = () => {
    const { id } = useParams();
    const [tourData, setTourData] = useState(null); // Lưu trữ dữ liệu tour
    const [loading, setLoading] = useState(true); // Theo dõi trạng thái loading
    const [error, setError] = useState(null); // Theo dõi lỗi
    const [numCustomers, setNumCustomers] = useState(1); // Số lượng khách
    const navigate = useNavigate();

    // Lấy dữ liệu tour khi component được mount
    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await userApi.getTourById(id); // Lấy dữ liệu tour
                setTourData(response.data); // Lưu dữ liệu vào state
                console.log(response.data);
                setLoading(false); // Dừng loading
            } catch (err) {
                setError('Không thể tải dữ liệu tour');
                setLoading(false); // Dừng loading
            }
        };

        fetchTourData();
    }, [id]);

    // Hàm định dạng giá tiền
    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    // Hàm định dạng ngày tháng
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('vi-VN', options);
    };

    // Xử lý khi đang tải hoặc có lỗi
    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Destructuring dữ liệu tour
    const {
        name,
        price,
        duration,
        startDate,
        endDate,
        description,
        destination,
        images,
        availableSlots,
        capacity,
        rating
    } = tourData;

    // Tính tổng tiền
    const totalPrice = price * numCustomers;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="container flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <img src={images} alt={name} className="w-full h-96 object-cover rounded-lg" />
                    <div className="mt-8">
                        <h2 className="pl-2 bg-lime-200 text-2xl font-bold text-green-600 py-2">Giới Thiệu Về Tour</h2>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Chương Trình Tham Quan Đặc Biệt:</h3>
                            <p className="mt-2 text-gray-700">{description}</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg">
                    <h1 className="text-3xl font-bold mt-4">{name}</h1>
                    <p className="text-red-500 text-2xl font-semibold mt-2">{formatPrice(price)}</p>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4">In chương trình tour</button>
                    <ul className="space-y-4 text-gray-700">
                        <li>
                            <strong>Hành trình:</strong> {destination}
                        </li>
                        <li>
                            <strong>Di chuyển:</strong> Ô Tô, Máy bay
                        </li>
                        <li>
                            <strong>Lịch khởi hành:</strong> {formatDate(startDate)} - {formatDate(endDate)}
                        </li>
                        <li>
                            <strong>Thời gian:</strong> {duration}
                        </li>
                        <li>
                            <strong>Số chỗ còn lại:</strong> {availableSlots} / {capacity}
                        </li>
                    </ul>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <strong>Số lượng khách:</strong>
                            <input
                                type="number"
                                value={numCustomers}
                                onChange={(e) => setNumCustomers(e.target.value)}
                                min="1"
                                max={availableSlots}
                                className="border p-2 rounded"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <strong>Tổng tiền:</strong>
                            <span className="text-xl font-semibold">{formatPrice(totalPrice)}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button
                            className="bg-pink-600 text-white px-4 py-2 rounded-md w-full"
                            onClick={() => navigate('/booking-info', { state: { tourData, numCustomers, totalPrice } })}
                        >
                            Đặt Tour
                        </button>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                            onClick={() => navigate('/cart')}
                        >
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetail;
