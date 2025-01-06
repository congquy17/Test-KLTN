import Header from '../components/Header';
import Footer from '../components/Footer';
import SidebarAdmin from '../components/SidebarAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ClientLayout = ({ children }) => {
    return (
        <>
            <Header />

            <main>{children}</main>
            <Footer />
            <ToastContainer limit={1} autoClose={1500} />
        </>
    );
};
export { ClientLayout };

const AdminLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}

            <SidebarAdmin />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-[#C499F3] text-black p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Thêm Tour</h1>
                    <div className="flex items-center space-x-4">
                        <span>🇻🇳</span>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">{children}</main>
            </div>
            <ToastContainer limit={3} autoClose={1500} />
        </div>
    );
};
export { AdminLayout };
