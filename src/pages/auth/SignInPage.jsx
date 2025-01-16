import { useState } from 'react';
import authImage from '../../assets/image/auth.png';
import userApi from '../../api/userApi'; // Import the auth API functions
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/clientSlice';
import axios from 'axios';
export default function SignIn() {
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // To handle loading state
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Toggle between login and forgot password screens
    const handleForgotPasswordClick = () => {
        setIsForgotPassword(true);
    };

    const handleBackToLoginClick = () => {
        setIsForgotPassword(false);
    };

    // Handle login form submission
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        try {
            const response = await userApi.login({ email, password });
            console.log('Login successful:', response);
            const user = response.data; // User information
            dispatch(setUser(user)); // Store user information in Redux
            // Redirect to the home page
            console.log(response);
            if ((response.data.user.role == 'admin') | (response.data.user.role == 'adminChat')) {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Đăng nhập thất bại. Vui lòng thử lại!');
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    // Handle forgot password form submission
    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            // Handle forgot password API request here (you can create a new API call for it)
            console.log('Forgot password email:', email);
            // You can implement the API call to send an email to reset the password
        } catch (error) {
            console.error('Forgot password error:', error);
        }
    };
    const handleSuccess = async (credentialResponse) => {
        try {
            const idToken = credentialResponse.credential; // Lấy ID Token từ phản hồi của Google
            console.log('Google ID Token:', credentialResponse); // Kiểm tra ID Token

            // Gửi ID Token đến backend
            const response = await axios.post('http://localhost:8000/api/auth/google-login', {
                token: idToken
            });

            const user = response.data; // User information
            dispatch(setUser(user)); // Store user information in Redux
            // Redirect to the home page
            console.log(response);
            if (response.data.user.role == 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
        }
    };

    const handleError = () => {
        console.error('Google Login Failed');
    };
    return (
        <div className="flex py-4 items-center justify-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex">
                {/* Left side: Image & Benefits */}
                <div className="w-1/2 p-6 flex flex-col justify-between bg-cover bg-center">
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

                {/* Right side: Form */}
                <div className="w-1/2 p-8">
                    {isForgotPassword ? (
                        // Forgot Password Screen
                        <div>
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold text-gray-800">Quên mật khẩu</h2>
                            </div>
                            <p className="mb-4 mt-4 text-center">Nhập địa chỉ email để lấy lại mật khẩu qua email.</p>

                            <form onSubmit={handleForgotPasswordSubmit}>
                                <label className="block mb-2">Email*</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập địa chỉ Email"
                                    className="w-full px-4 py-2 border rounded mb-6"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-purple-500 text-white font-semibold py-2 rounded mt-4 hover:bg-purple-600"
                                >
                                    LẤY LẠI MẬT KHẨU
                                </button>

                                <a
                                    href="#"
                                    onClick={handleBackToLoginClick}
                                    className="mt-4 text-sm text-purple-500 hover:underline"
                                >
                                    Quay lại tại đây.
                                </a>
                            </form>
                        </div>
                    ) : (
                        // Login Screen
                        <div>
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold text-gray-800">Đăng nhập</h2>
                            </div>

                            <form onSubmit={handleLoginSubmit} className="mt-6">
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                        EMAIL*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                        placeholder="Nhập Địa chỉ Email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                                        MẬT KHẨU*
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                                        placeholder="Nhập Mật khẩu"
                                    />
                                </div>

                                {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

                                <div className="flex items-center justify-between">
                                    <a
                                        href="#"
                                        onClick={handleForgotPasswordClick}
                                        className="text-sm text-purple-500 hover:underline"
                                    >
                                        Quên mật khẩu?
                                    </a>
                                    <a href="/signup" className="text-sm text-purple-500 hover:underline">
                                        Đăng ký tài khoản
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-500 text-white font-semibold py-2 rounded mt-4 hover:bg-purple-600"
                                    disabled={isLoading} // Disable button while loading
                                >
                                    {isLoading ? 'ĐANG ĐĂNG NHẬP...' : 'ĐĂNG NHẬP'}
                                </button>

                                <p className="text-xs text-center text-gray-500 mt-4">
                                    Tourish cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có
                                    được sự đồng ý của bạn.
                                </p>
                            </form>

                            <div className="flex items-center justify-center mt-6 space-x-4">
                                <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                                    Facebook
                                </button>
                                <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                                    Google
                                </button>
                                <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
