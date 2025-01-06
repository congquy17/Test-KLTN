import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userApi from '../../api/userApi'; // Ensure you import the API call here

export default function CartPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch cart for userId 1
        const fetchCart = async () => {
            try {
                const response = await userApi.getCartByUserId(1); // Get cart by userId 1
                setCart(response.data);
            } catch (err) {
                setError('Failed to fetch cart data');
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    // Calculate total price of the cart
    const calculateTotalPrice = () => {
        if (!cart || !cart.items) return 0;
        return cart.items.reduce((total, item) => total + item.totalPrice, 0);
    };

    const handleBookTour = () => {
        navigate('/booking-info');
    };

    if (loading) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Title */}
            <h1 className="text-2xl font-bold mb-6">Giỏ Hàng</h1>

            {/* Cart Table */}
            <div className="flex">
                <div className="overflow-x-auto">
                    <div>
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">STT</th>
                                    <th className="border border-gray-300 px-4 py-2">Tên Tour</th>
                                    <th className="border border-gray-300 px-4 py-2">Hình Ảnh</th>
                                    <th className="border border-gray-300 px-4 py-2">Giá</th>
                                    <th className="border border-gray-300 px-4 py-2">Số Lượng</th>
                                    <th className="border border-gray-300 px-4 py-2">Ngày Đặt</th>
                                    <th className="border border-gray-300 px-4 py-2">Tổng Tiền</th>
                                    <th className="border border-gray-300 px-4 py-2">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.items?.map((item, index) => (
                                    <tr key={item.tourId}>
                                        <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <img src={item.imageUrl} alt={item.name} className="w-12 h-12 mx-auto" />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-right">{item.price} đ</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-black rounded">
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    value={item.quantity}
                                                    readOnly
                                                    className="w-10 text-center border rounded"
                                                />
                                                <button className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-black rounded">
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {new Date(item.bookingDate).toLocaleDateString()}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-right">
                                            {item.totalPrice} đ
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <button className="text-red-600 hover:text-red-800">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Summary */}
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-xl font-bold text-pink-600">Tổng tiền: {calculateTotalPrice()} đ</p>
                        </div>
                        <button
                            className="px-6 py-3 bg-pink-600 text-white font-bold rounded hover:bg-pink-700"
                            onClick={handleBookTour}
                        >
                            Thanh Toán
                        </button>
                    </div>
                </div>

                {/* Quick Tour Search */}
                <div className="ml-8 p-4 bg-purple-100 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Tìm tour nhanh</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="from" className="block text-sm font-medium">
                                Từ
                            </label>
                            <select
                                id="from"
                                className="w-full mt-1 border rounded px-3 py-2 focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="hanoi">Hà Nội</option>
                                <option value="hcmc">Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="to" className="block text-sm font-medium">
                                Bạn muốn đi đâu?
                            </label>
                            <input
                                type="text"
                                id="to"
                                placeholder="Nhập điểm đến"
                                className="w-full mt-1 border rounded px-3 py-2 focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white py-2 rounded font-semibold hover:bg-pink-700"
                        >
                            Tìm Ngay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
