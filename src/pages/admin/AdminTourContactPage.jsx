import React from 'react';

export default function AdminTourContactPage() {
    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Danh sách liên hệ</h1>
                <a href="#" className="text-blue-500 hover:underline">
                    Trang chủ
                </a>
            </div>

            {/* Form Tìm kiếm */}
            <div className="bg-white p-4 shadow-md rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-4">Form tìm kiếm</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <input type="text" placeholder="Tên liên hệ" className="border p-2 rounded-lg w-full" />
                    <input type="email" placeholder="Email" className="border p-2 rounded-lg w-full" />
                    <input type="text" placeholder="Số điện thoại" className="border p-2 rounded-lg w-full" />
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Tìm kiếm</button>
            </div>

            {/* Bảng Danh sách liên hệ */}
            <div>
                <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">STT</th>
                            <th className="px-4 py-2">Tên liên hệ</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Số điện thoại</th>
                            <th className="px-4 py-2">Ghi chú</th>
                            <th className="px-4 py-2">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Nguyễn Văn A</td>
                            <td className="px-4 py-2">nguyenvana@gmail.com</td>
                            <td className="px-4 py-2">0901234567</td>
                            <td className="px-4 py-2">Khách hàng tiềm năng</td>
                            <td className="px-4 py-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Chi tiết</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">Trần Thị B</td>
                            <td className="px-4 py-2">tranthib@gmail.com</td>
                            <td className="px-4 py-2">0912345678</td>
                            <td className="px-4 py-2">Yêu cầu báo giá</td>
                            <td className="px-4 py-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Chi tiết</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
