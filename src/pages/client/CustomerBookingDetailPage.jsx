import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import userApi from '../../api/userApi';
import 'jspdf-autotable';

export default function CustomerBookingDetailPage() {
    const { bookingId } = useParams();
    const [BookingDetails, setBookingDetails] = useState(null);

    useEffect(() => {
        if (!bookingId) return;

        const fetchBookingDetails = async () => {
            try {
                const response = await userApi.getBookingsById(bookingId);
                setBookingDetails(response.data);
                console.log(response.data); // For debugging, remove in production
            } catch (error) {
                console.error('Failed to fetch booking details:', error);
            }
        };

        fetchBookingDetails();
    }, [bookingId]);

    // If booking details are not yet fetched, show loading message
    if (!BookingDetails) {
        return <div>Loading...</div>;
    }

    // Function to download PDF
    const downloadPDF = () => {
        const doc = new jsPDF();

        // Title for the PDF
        doc.setFontSize(18);
        doc.text('Chi tiết đặt tour', 14, 20);

        // Prepare the booking details
        const bookingData = [
            ['Tên tour', BookingDetails.tourName],
            ['Thời gian', BookingDetails.tourDuration],
            ['Ngày khởi hành', new Date(BookingDetails.bookingDate).toLocaleDateString()],
            ['Tên Khách hàng', BookingDetails.customerName],
            ['Ngày khởi hành', new Date(BookingDetails.bookingDate).toLocaleDateString()],
            ['Tổng tiền', `${BookingDetails.totalPrice.toLocaleString()} VND`],
            ['Giá vé 1 người', `${BookingDetails.tourPrice} VND`],
            ['Số lượng', BookingDetails.numberOfGuests],
            ['Trạng thái đặt tour', BookingDetails.bookingStatus],
            ['Trạng thái thanh toán', BookingDetails.paymentStatus]
        ];

        // If you want to handle an image from a URL (e.g., BookingDetails.imageTour)
        const img = BookingDetails.imageTour; // Assuming this is the image URL or base64 data

        // Add the image to the PDF (e.g., at coordinates 15, 30 with width and height of 50)
        if (img) {
            doc.addImage(img, 'JPEG', 15, 30, 50, 50); // You can change 'JPEG' to 'PNG' depending on the image format
        }

        // Create the table for booking details, leaving space for the image
        doc.autoTable({
            head: [['Thông tin tour', 'Chi tiết']],
            body: bookingData,
            startY: 90, // Adjust startY to leave space for the image
            theme: 'grid'
        });

        // Save the PDF file
        doc.save('booking-detail.pdf');
    };

    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6">Chi tiết đặt tour</h1>

            <div className="bg-white p-6 shadow-md rounded mb-6">
                {/* Customer Information */}
                <h2 className="text-xl font-bold mb-4">Thông tin khách hàng</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-medium">Họ và tên:</p>
                        <p>{BookingDetails.customerName}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Email:</p>
                        <p>{BookingDetails.customerEmail}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Số điện thoại:</p>
                        <p>{BookingDetails.customerPhone}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Địa chỉ:</p>
                        <p>{BookingDetails.customerAddress}</p>
                    </div>
                </div>
            </div>

            {/* Tour Details */}
            <div className="bg-white p-6 shadow-md rounded">
                <h2 className="text-xl font-bold mb-4">Danh sách tour đã đặt</h2>
                <div className="border-b border-gray-300 pb-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <h3 className="text-lg font-bold">{BookingDetails.tourName}</h3>
                            <p className="text-sm text-gray-500">{BookingDetails.tourName}</p>
                        </div>
                        <div className="flex">
                            <img
                                src={BookingDetails.imageTour}
                                className="w-20 h-20 ml-2 rounded"
                                alt={BookingDetails.tourName}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-sm font-medium">Thời gian:</p>
                            <p>{BookingDetails.tourDuration}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Ngày khởi hành:</p>
                            <p>{new Date(BookingDetails.bookingDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Tổng tiền:</p>
                            <p>{BookingDetails.totalPrice.toLocaleString()} VND</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Giá vé 1 người:</p>
                            <p>{BookingDetails.tourPrice} VND</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Số lượng:</p>
                            <p>{BookingDetails.numberOfGuests}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <p className="text-sm font-medium">Trạng thái đặt tour:</p>
                            <p>{BookingDetails.bookingStatus}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Trạng thái thanh toán:</p>
                            <p>{BookingDetails.paymentStatus}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button to download PDF */}
            <button onClick={downloadPDF} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Tải PDF
            </button>
        </div>
    );
}
