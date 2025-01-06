import authImage from '../../assets/image/auth.png';
export default function AboutPage() {
    return (
        <div className=" container mx-auto min-h-screen flex flex-col items-center">
            {/* Header Section with Background Image */}
            <div
                className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center text-white text-center px-8"
                style={{ backgroundImage: `url(${authImage})` }}
            >
                <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">TOURISH</h1>
                    <p className="text-md md:text-lg max-w-4xl">
                        TOURISH là hệ thống đặt phòng khách sạn và khu nghỉ dưỡng của CÔNG TY TNHH TMDV TOURISH. Chúng
                        tôi chuyên về tư vấn và thực hiện đặt phòng tại các khu nghỉ dưỡng cao cấp 4-5* tại các resort
                        ven biển và các điểm du lịch nổi tiếng trên toàn quốc.
                    </p>
                </div>
            </div>

            {/* Reasons Section */}
            <section className="pt-16 bg-white text-center border-2 container mx-auto">
                <h2 className="text-3xl font-bold text-purple-600">Tại sao bạn nên chọn Tourish?</h2>
                <div className="mt-8 flex flex-wrap justify-center gap-8">
                    <div className="w-full md:w-1/4 p-4">
                        <div className="bg-purple-100 rounded-lg p-6">
                            <h3 className="text-xl font-bold">Đảm bảo giá tốt nhất</h3>
                            <p>
                                Chúng tôi cam kết đem đến cho khách hàng mức giá tốt nhất trên thị trường, giúp bạn có
                                chuyến đi tiết kiệm và đáng nhớ.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <div className="bg-purple-100 rounded-lg p-6">
                            <h3 className="text-xl font-bold">Dịch vụ uy tín - Chất lượng</h3>
                            <p>
                                Đội ngũ nhân viên chuyên nghiệp, nhiệt tình sẽ hỗ trợ bạn suốt hành trình để bạn có trải
                                nghiệm du lịch tuyệt vời.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <div className="bg-purple-100 rounded-lg p-6">
                            <h3 className="text-xl font-bold">Đảm bảo chất lượng</h3>
                            <p>
                                Tourish đảm bảo các dịch vụ được cung cấp là chất lượng cao và đáp ứng yêu cầu của khách
                                hàng.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <div className="w-full mt-16 max-w-2xl p-8 text-center border border-purple-600 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Thông Tin Liên Hệ</h2>
                <p>CÔNG TY TNHH TNHH TMDV TOURISH</p>
                <p>Địa chỉ: Số 12, Đường Nguyễn Văn Bảo, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
                <p>Điện thoại: 0283.8940.390</p>
                <p>Zalo: 0283.8940.390</p>
                <p>Email: dhcn@iuh.edu.vn</p>
            </div>

            {/* Map Section */}
            <div className="w-full max-w-2xl p-8 text-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8654667388378!2d106.68726749999999!3d10.821606000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d313f06481%3A0x780176de17d954cb!2zMTIgTmd1eeG7hW4gVsSDbiBC4bqjbywgUGjGsOG7nW5nIDQsIEfDsiBW4bqlcCwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1731658436558!5m2!1svi!2s"
                    width="100%"
                    height="300"
                    className="border border-gray-300 rounded-md"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
