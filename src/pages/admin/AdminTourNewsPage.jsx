import React from 'react';

export default function AdminTourNewsPage() {
    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Đặt tour / Danh sách</h1>
                <a href="#" className="text-blue-500 hover:underline">
                    Trang chủ
                </a>
            </div>

            {/* Form Tìm kiếm */}
            <div className="bg-white p-4 shadow-md rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-4">Form tìm kiếm</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <input type="text" placeholder="Tên tour" className="border p-2 rounded-lg" />
                    <select className="border p-2 rounded-lg">
                        <option>Chọn mã tour</option>
                        <option>Mã Tour 1</option>
                        <option>Mã Tour 2</option>
                    </select>
                    <input type="text" placeholder="Tên khách hàng" className="border p-2 rounded-lg" />
                    <input type="email" placeholder="Email" className="border p-2 rounded-lg" />
                    <input type="text" placeholder="Số điện thoại" className="border p-2 rounded-lg" />
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Tìm kiếm</button>
            </div>

            {/* Bảng Danh sách */}
            <div>
                <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">STT</th>
                            <th className="px-4 py-2">Tên tour - Mã tour</th>
                            <th className="px-4 py-2">Thông tin khách hàng</th>
                            <th className="px-4 py-2">Dữ liệu tour</th>
                            <th className="px-4 py-2">Hình thức</th>
                            <th className="px-4 py-2">Trạng thái</th>
                            <th className="px-4 py-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Du lịch Châu Đốc - Mã 14</td>
                            <td className="px-4 py-2">
                                Tên: Nguyễn Thành Trung <br />
                                Email: 0306181326@caothang.edu.vn
                            </td>
                            <td className="px-4 py-2">
                                Số người lớn: 3 - Thành tiền: 14.370.000 VNĐ <br />
                                Số trẻ em: 4 - Thành tiền: 8.800.000 VNĐ
                            </td>
                            <td className="px-4 py-2">Trả góp</td>
                            <td className="px-4 py-2">Chờ xác nhận</td>
                            <td className="px-4 py-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Chi tiết</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">Du lịch Tây Ninh - Mã 11</td>
                            <td className="px-4 py-2">
                                Tên: Trần Văn A <br />
                                Email: tranvana@gmail.com
                            </td>
                            <td className="px-4 py-2">
                                Số người lớn: 2 - Thành tiền: 10.000.000 VNĐ <br />
                                Số trẻ em: 1 - Thành tiền: 2.500.000 VNĐ
                            </td>
                            <td className="px-4 py-2">Thanh toán ngay</td>
                            <td className="px-4 py-2">Đã xác nhận</td>
                            <td className="px-4 py-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Chi tiết</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
