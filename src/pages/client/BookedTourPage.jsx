import React, { useEffect, useState } from 'react';
import userApi from '../../api/userApi'; // Import your API utility
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const BookedTourPage = () => {
    const [bookings, setBookings] = useState([]);
    const user = useSelector((state) => state.client.user);

    // Fetch bookings on component mount
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const userId = user.userId; // Replace with dynamic userId if needed
                const bookings = await userApi.getBookingsByUserId(userId);
                setBookings(bookings);
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        };

        fetchBookings();
    }, []);
    const deleteBooking = async (bookingId) => {
        const confirmed = window.confirm('Bạn có chắc chắn muốn xóa booking này?'); // Xác nhận với người dùng
        if (!confirmed) return; // Nếu người dùng không xác nhận, không làm gì

        try {
            // Gọi API xóa booking
            await userApi.deleteBooking(bookingId);

            // Cập nhật lại danh sách booking sau khi xóa
            setBookings((prevBookings) => prevBookings.filter((booking) => booking.bookingId !== bookingId));

            // Hiển thị thông báo thành công
            toast.success('Booking deleted successfully');
        } catch (error) {
            console.error('Failed to delete booking:', error);
            toast.error('Failed to delete booking');
        }
    };
    return (
        <div className="container mx-auto p-6 pb-10">
            <h1 className="text-center text-2xl font-bold mb-6 text-blue-600">Booked Tours</h1>
            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">TT</th>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Tour</th>
                        <th className="border px-4 py-2">Tổng Tiền</th>
                        <th className="border px-4 py-2">Trạng thái</th>
                        <th className="border px-4 py-2">Ngày đặt</th>
                        <th className="border px-4 py-2">Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={booking.bookingId} className="text-center">
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{booking.bookingId}</td>
                            <td className="border px-4 py-2">{booking.tourName}</td>
                            <td className="border px-4 py-2">{booking.totalPrice.toLocaleString()} VND</td>
                            <td className="border px-4 py-2">{booking.bookingStatus}</td>
                            <td className="border px-4 py-2">
                                {new Date(booking.bookingDate).toLocaleString('vi-VN')}
                            </td>
                            <td className="border px-4 py-2">
                                <Link
                                    to={`/customer-booking-detail/${encodeURIComponent(
                                        booking.bookingId
                                    )}?tourName=${encodeURIComponent(booking.tourName)}&totalPrice=${encodeURIComponent(
                                        booking.totalPrice
                                    )}&bookingDate=${encodeURIComponent(booking.bookingDate)}`}
                                    className="underline text-[blue] "
                                >
                                    xem
                                </Link>
                                <button
                                    className="underline text-[red] ml-2"
                                    onClick={() => deleteBooking(booking.bookingId)}
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookedTourPage;
