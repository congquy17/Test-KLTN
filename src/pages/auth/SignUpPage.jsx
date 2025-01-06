import React, { useState } from 'react';
import authImage from '../../assets/image/auth.png';
import userApi from '../../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        console.log(password);
        console.log(phone);
        e.preventDefault(); // Ngừng hành động mặc định của form
        setLoading(true);
        try {
            // Gọi API đăng ký từ authApi
            const response = await userApi.register(formData);
            console.log(response);
            setMessage('Đăng ký thành công! Vui lòng đăng nhập.');
            setTimeout(() => {
                navigate('/signin'); // Điều hướng đến trang đăng nhập
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Đăng ký thất bại! Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex py-4 items-center justify-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex">
                {/* Left side: Image & Benefits */}
                <div className="w-1/2 p-6 flex flex-col bg-cover bg-center">
                    <div>
                        <img src={authImage} alt="Background" className="w-full h-auto mb-4" />
                    </div>
                    <div className="text-left text-gray-800">
                        <h3 className="text-lg font-semibold">QUYỀN LỢI THÀNH VIÊN</h3>
                        <ul className="mt-4 space-y-2">
                            <li>✔️ Tour chọn lọc chất lượng nhất</li>
                            <li>✔️ Đội ngũ tư vấn chi tiết và tận tình</li>
                            <li>✔️ Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</li>
                        </ul>
                    </div>
                </div>

                {/* Right side: Sign-Up Form */}
                <div className="w-1/2 p-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Đăng ký</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                Họ Và Tên*
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                placeholder="Nhập Họ Tên"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                                SỐ ĐIỆN THOẠI*
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                placeholder="Nhập Số Điện Thoại"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                EMAIL*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                placeholder="Nhập Địa chỉ Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                                MẬT KHẨU*
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                placeholder="Nhập Mật khẩu"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {message && <div className="mb-4 text-center text-red-500">{message}</div>}

                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white font-semibold py-2 rounded mt-4 hover:bg-green-600"
                            disabled={loading}
                        >
                            {loading ? 'Đang xử lý...' : 'ĐĂNG KÝ'}
                        </button>

                        <div className="flex items-center justify-between mt-2">
                            <a href="/signin" className="text-sm text-purple-500 hover:underline">
                                Đăng nhập
                            </a>
                        </div>

                        <p className="text-xs text-center text-gray-500 mt-4">
                            Tourish cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự
                            đồng ý của bạn.
                        </p>
                    </form>

                    <div className="flex items-center justify-center mt-6 space-x-4">
                        <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Facebook
                        </button>
                        <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
