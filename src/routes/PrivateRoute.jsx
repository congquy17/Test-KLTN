// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({ children, isAdmin }) {
    const isAuthenticated = true; // Kiểm tra trạng thái đăng nhập (cập nhật theo logic của bạn)
    const userRole = 'admin'; // Lấy vai trò từ state hoặc context
    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }
    if (isAdmin && userRole !== 'admin') {
        return <Navigate to="/" />;
    }
    return children;
}
