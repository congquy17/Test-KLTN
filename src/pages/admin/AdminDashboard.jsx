import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Quản lý du lịch</h1>
                <a href="#" className="text-blue-500 hover:underline">
                    Trang chủ
                </a>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                <Card title="Tổng số tour" value="7" icon="🗂️" />
                <Card title="Tour đã đặt" value="1" icon="📦" />
                <Card title="Tổng số thành viên" value="4" icon="👥" />
                <Card title="Tổng số bài viết" value="3" icon="📄" />
                <Card title="Doanh thu ngày" value="0 VNĐ" icon="💵" />
                <Card title="Doanh thu năm" value="0 VNĐ" icon="💰" />
            </div>

            {/* Tour nổi bật */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Tour nổi bật</h2>
                <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">Mã Tour</th>
                            <th className="px-4 py-2">Tên Tour</th>
                            <th className="px-4 py-2">Lượt đăng ký</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-2">14</td>
                            <td className="px-4 py-2">
                                Du lịch Châu Đốc mùa nước nổi thăm quan rừng tràm Trà Sư từ Sài Gòn 2023
                            </td>
                            <td className="px-4 py-2">9</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">11</td>
                            <td className="px-4 py-2">Du lịch Tây Ninh - Tòa Thánh Cao Đài - Núi Bà Đen từ Sài Gòn</td>
                            <td className="px-4 py-2">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Card Component
const Card = ({ title, value, icon }) => {
    return (
        <div className="flex items-center bg-white shadow-md rounded-lg p-4">
            <div className="text-3xl mr-4">{icon}</div>
            <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-lg font-bold">{value}</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
