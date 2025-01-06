import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo/logo.jpg';
function Footer() {
    return (
        <footer className="  text-white  " style={{ backgroundColor: '#33186B' }}>
            <div className="container mx-auto p-4">
                {/* Social Media and Newsletter */}
                <div className="flex justify-between items-center h-[60px]  border-b-2 border-dotted border-gray-500 ">
                    <div className="flex space-x-4 text-2xl">
                        <FaFacebook />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                    <h3 className=" ">Đăng ký nhận tin</h3>
                    <p className="">Các deal du lịch giảm giá đến 60% sẽ được gửi đến bạn</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Địa chỉ email"
                            className="p-2 rounded-l-md outline-none text-black"
                        />
                        <button className="bg-purple-600 p-2 rounded-r-md text-white">Đăng ký</button>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex">
                    {/* Contact Information */}
                    <div className="text-center md:text-left w-[25%] p-5" style={{ backgroundColor: '#25114D' }}>
                        {/* <h4 className="text-2xl  mb-2">Tourish</h4> */}
                        <img src={logo} alt="Logo" className="w-[230px]" />
                        <p
                            className=""
                            style={{
                                color: '#C499F3'
                            }}
                        >
                            Địa chỉ: 12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, Hồ Chí Minh
                        </p>
                        <p
                            className=""
                            style={{
                                color: '#C499F3'
                            }}
                        >
                            Email: dhcn@iuh.edu.vn
                        </p>
                        <p
                            className=""
                            style={{
                                color: '#C499F3'
                            }}
                        >
                            Điện thoại: 0283.8940 390
                        </p>
                        <p
                            className=""
                            style={{
                                color: '#C499F3'
                            }}
                        >
                            Zalo: 0283.8940 390
                        </p>
                        <p
                            className=""
                            style={{
                                color: '#C499F3'
                            }}
                        >
                            Công ty TNHH TMDV Tourish
                        </p>
                    </div>
                    <div className="w-[65%] ml-2">
                        <div className="flex justify-around mt-3">
                            {/* Footer Links */}
                            <div className=" w-[23%] ml-2">
                                <div>
                                    <h4 className="text-[20px]">Thông tin</h4>
                                    <ul
                                        className=""
                                        style={{
                                            color: '#C499F3'
                                        }}
                                    >
                                        <li>Trang chủ</li>
                                        <li>Giới thiệu</li>
                                        <li>Tour du lịch</li>
                                        <li>Phòng khách sạn</li>

                                        <li>Tin tức</li>
                                        <li>Liên hệ</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Additional Links */}
                            <div className=" w-[23%] ml-2">
                                <h4 className="text-[20px]">Hướng dẫn</h4>
                                <ul
                                    className=""
                                    style={{
                                        color: '#C499F3'
                                    }}
                                >
                                    <li>Hướng dẫn mua hàng</li>
                                    <li>Hướng dẫn thanh toán</li>
                                    <li>Hướng dẫn giao nhận</li>
                                    <li>Điều khoản dịch vụ</li>
                                </ul>
                            </div>

                            <div className=" w-[23%] ml-2">
                                <h4 className="text-[20px]">Chính sách</h4>
                                <ul
                                    className=""
                                    style={{
                                        color: '#C499F3'
                                    }}
                                >
                                    <li>Chính sách bảo mật</li>
                                    <li>Chính sách vận chuyển</li>
                                    <li>Chính sách đổi trả</li>
                                    <li>Quy định sử dụng</li>
                                </ul>
                            </div>
                            <div className=" w-[23%] ml-2">
                                <h4 className=" text-[20px]">Hỗ trợ</h4>
                                <ul
                                    className=""
                                    style={{
                                        color: '#C499F3'
                                    }}
                                >
                                    <li>Tìm kiếm</li>
                                    <li>Giới thiệu</li>
                                </ul>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className="text-center text-sm mt-8 border-t border-purple-700 pt-4">
                            Bản quyền thuộc về <span className="">Tourish</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
