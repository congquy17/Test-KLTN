// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/client/HomePage';
import AboutPage from './pages/client/AboutPage';
import TourPage from './pages/client/TourPage';
import HotelPage from './pages/client/HotelPage';
import NewsPage from './pages/client/NewsPage';
import ContactPage from './pages/client/ContactPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import TourDetail from './pages/client/TourDetail';
import CartPage from './pages/client/CartPage';
import BookingInfoPage from './pages/client/BookingInfoPage';
import BookedTourPage from './pages/client/BookedTourPage';
import CustomerBookingDetailPage from './pages/client/CustomerBookingDetailPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './routes/PrivateRoute';

import { ClientLayout } from './layouts/AdminClientLayout';
import { AdminLayout } from './layouts/AdminClientLayout';

import AdminTourAddPage from './pages/admin/AdminTourAddPage';
import AdminTourListPage from './pages/admin/AdminTourListPage';
import AdminTourCategoryPage from './pages/admin/AdminTourCategoryPage';
import AdminTourNewsPage from './pages/admin/AdminTourNewsPage';
import AdminTourContactPage from './pages/admin/AdminTourContactPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './store/store';
import ChatWidget from './components/ChatWidget';
function App() {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId="326262609391-ku9d67fm0ob87v9cc7apl2pcbmasl5qm.apps.googleusercontent.com">
                <Router>
                    <div className="main-content mt-0 pt-0">
                        <Routes>
                            {/* Các Route sẽ trỏ về các trang */}
                            <Route
                                path="/"
                                element={
                                    <ClientLayout>
                                        <HomePage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    <ClientLayout>
                                        <AboutPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/tours"
                                element={
                                    <ClientLayout>
                                        <TourPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/tour/:id"
                                element={
                                    <ClientLayout>
                                        <TourDetail />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/hotels"
                                element={
                                    <ClientLayout>
                                        <HotelPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/news"
                                element={
                                    <ClientLayout>
                                        <NewsPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/contact"
                                element={
                                    <ClientLayout>
                                        <ContactPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/cart"
                                element={
                                    <ClientLayout>
                                        <CartPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/booking-info"
                                element={
                                    <ClientLayout>
                                        <BookingInfoPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/booked-tour"
                                element={
                                    <ClientLayout>
                                        <BookedTourPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/customer-booking-detail/:bookingId"
                                element={
                                    <ClientLayout>
                                        <CustomerBookingDetailPage />
                                    </ClientLayout>
                                }
                            />
                            {/* Route cho đăng nhập và đăng ký */}
                            <Route
                                path="/signin"
                                element={
                                    <ClientLayout>
                                        <SignInPage />
                                    </ClientLayout>
                                }
                            />
                            <Route
                                path="/signup"
                                element={
                                    <ClientLayout>
                                        <SignUpPage />
                                    </ClientLayout>
                                }
                            />
                            // Route cho trang Admin
                            <Route
                                path="/admin"
                                element={
                                    <PrivateRoute isAdmin={true}>
                                        <AdminLayout>
                                            <AdminDashboard />
                                        </AdminLayout>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/tour-add"
                                element={
                                    <PrivateRoute isAdmin={true}>
                                        <AdminLayout>
                                            <AdminTourAddPage />
                                        </AdminLayout>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/tour-list"
                                element={
                                    <PrivateRoute isAdmin={true}>
                                        <AdminLayout>
                                            <AdminTourListPage />
                                        </AdminLayout>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/tour-category"
                                element={
                                    <PrivateRoute isAdmin={true}>
                                        <AdminLayout>
                                            <AdminTourCategoryPage />
                                        </AdminLayout>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/tour-news"
                                element={
                                    <PrivateRoute isAdmin={true}>
                                        <AdminLayout>
                                            <AdminTourNewsPage />
                                        </AdminLayout>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/tour-contact"
                                element={
                                    <PrivateRoute isAdmin={true}>
                                        <AdminLayout>
                                            <AdminTourContactPage />
                                        </AdminLayout>
                                    </PrivateRoute>
                                }
                            />
                        </Routes>
                        <ChatWidget />
                    </div>
                </Router>
            </GoogleOAuthProvider>
        </Provider>
    );
}

export default App;
