import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userApi from '../../api/userApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function BookingInfoPage() {
    const user = useSelector((state) => state.client.user);
    const navigate = useNavigate();
    const location = useLocation();
    const { tourData, numCustomers, totalPrice } = location.state || {};
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const handleBookTour = async () => {
        if (!user) {
            toast.error('Vui lòng đăng nhập để đặt tour!');
            navigate('/signin');
            return;
        }
        if (!name || !email || !phone) {
            toast.error('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        if (numCustomers <= 0) {
            toast.error('Vui lòng chọn số lượng khách!');
            return;
        }
        console.log('Tour ID:', tourData.id);
        console.log('User ID:', user.userId);
        // Collect data to send
        const bookingData = {
            userId: user.userId, // You should get this from the logged-in user info
            tourId: tourData.tourId, // Assuming 'tourData' has an 'id' field
            numberOfGuests: numCustomers,
            totalPrice: totalPrice,
            status: 'Pending',
            paymentStatus: paymentMethod === 'cod' ? 'Unpaid' : 'Paid',
            bookingDate: new Date().toISOString().split('T')[0], // Format the current date
            customerName: name,
            customerPhone: phone,
            customerEmail: email,
            customerAddress: address,
            tourName: tourData.name,
            tourImage: tourData.images,
            tourPrice: tourData.price
        };

        try {
            // Call API to create booking
            await userApi.createBooking(bookingData);
            toast.success('Đặt tour thành công!');
            navigate('/booked-tour'); // Navigate to the booked-tour page
        } catch (error) {
            toast.error('Đặt tour thất bại, vui lòng thử lại!');
            console.error('Error creating booking:', error);
        }
    };
    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6">Thông tin khách hàng</h1>

            <div className="grid grid-cols-3 gap-6">
                {/* Form Nhập Thông Tin */}
                <div className="col-span-2 bg-white p-6 shadow-md rounded">
                    <form>
                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Nhập email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Họ và tên */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Nhập họ và tên"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Số điện thoại */}
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium">
                                Số điện thoại (tuỳ chọn)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Nhập số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        {/* Địa chỉ */}
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium">
                                Địa chỉ (tuỳ chọn)
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Nhập địa chỉ của bạn"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        {/* Phương thức thanh toán */}
                        <div className="mb-4">
                            <h3 className="text-lg font-medium mb-2">Thanh toán</h3>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Thanh toán khi giao hàng (COD)</span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Thông tin đơn hàng */}
                <div className="col-span-1 bg-white p-6 shadow-md rounded">
                    <h2 className="text-xl font-bold mb-4">Đơn hàng</h2>
                    <ul className="space-y-4">
                        {/* Tour Item */}
                        <li className="flex justify-between items-center">
                            <div className="">
                                <img src={tourData?.images} alt="" className="w-20" />
                            </div>
                            <div className="mr-20">
                                <p className="font-medium">{tourData?.name}</p>
                                <p className="text-sm text-gray-500">6N5Đ - BAY JETSTAR AIRWAY</p>
                            </div>

                            <div className="text-right">
                                <p className="font-bold">{tourData?.price}</p>
                            </div>
                        </li>
                    </ul>

                    {/* Thêm số lượng khách */}
                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <p className="font-medium">Số lượng khách</p>
                            <p className="font-bold">{numCustomers}</p>
                        </div>
                    </div>

                    {/* Tổng tiền */}
                    <div className="border-t border-gray-300 mt-4 pt-4">
                        <div className="flex justify-between font-bold">
                            <p>Tổng cộng</p>
                            <p>{totalPrice}</p> {/* Tính tổng tiền */}
                        </div>
                    </div>

                    {/* Nút đặt hàng */}
                    <button
                        className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        onClick={handleBookTour}
                    >
                        Đặt Hàng
                    </button>
                </div>
            </div>
        </div>
    );
}
