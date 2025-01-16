import background from '../../assets/image/background.png';
import TourList from '../../features/client/tour/TourList';
import { Link } from 'react-router-dom';
const newsItems = [
    {
        title: 'Nắm trong tay cách di chuyển từ sân bay Narita và trung tâm thủ đô Tokyo như người bản xứ',
        description: 'Hệ thống giao thông tại Nhật Bản phát triển rất đa dạng và khá phức tạp...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    },
    {
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới...',
        description: 'Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    },
    {
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới...',
        description: 'Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    },
    {
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới...',
        description: 'Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    },
    {
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới...',
        description: 'Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    },
    {
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới...',
        description: 'Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    },
    {
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới...',
        description: 'Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    },
    {
        title: 'Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới...',
        description: 'Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh...',
        image: 'https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112'
    }
    // Add other items here
];
function HomePage() {
    return (
        <div className="">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[700px]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">Cuộc sống đợi khi là những chuyến đi...</h1>
                    <p className="mt-4 text-lg">
                        Hãy để Tourish đồng hành cùng bạn và biến giấc mơ du lịch của bạn thành hiện thực.
                    </p>

                    <div className="mt-8 bg-white rounded-lg shadow-lg p-6  ">
                        <div>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-md text-purple-600 placeholder:text-purple-600"
                                placeholder="Bạn muốn đi đâu?"
                            />
                        </div>
                        <div className="flex mt-4">
                            <input
                                type="date"
                                className="w-full p-3 border rounded-md text-purple-600 "
                                placeholder="Chọn Ngày Khởi Hành"
                            />
                            <select className="w-full p-3 border rounded-md text-purple-600  ml-5">
                                <option>Khởi hành từ</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                            </select>
                            <button className="w-[250px]  bg-purple-600 text-white p-3 rounded-md ml-5">TÌM</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
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

            {/* TOUR GIÁ TỐT*/}
            <section className="pt-16 mb-4 bg-white text-center container mx-auto">
                <h2 className="text-3xl font-bold text-purple-600">TOUR GIÁ TỐT</h2>
                {/* <TourList className="mt-8" categoryName={'Tour Giá Tốt'} home={true} /> */}
            </section>
            <div className="container mx-auto  flex justify-center gap-8 mt-10">
                <Link to="/tours" className="w-full h-48 object-cover rounded-lg hover:opacity-[0.8]">
                    <img
                        src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/feature_menu_1.jpg?1679559586112"
                        alt="Tour Image"
                    />
                </Link>
                <Link to="/hotels" className="w-full h-48 object-cover rounded-lg hover:opacity-[0.8]">
                    <img
                        src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/feature_menu_2.jpg?1679559586112"
                        alt="Tour Image"
                    />
                </Link>
            </div>
            {/* TOUR TRONG NƯỚC */}
            <section className="py-8 bg-white text-center container mx-auto mt-[80px]">
                <h2 className="text-3xl font-bold text-purple-600">TOUR TRONG NƯỚC</h2>
                {/* <TourList className="mt-8" categoryName={'Du lịch trong nước'} /> */}
            </section>
            {/* TOUR TRONG NƯỚC */}
            <section className="py-8 bg-white text-center container mx-auto mt-[80px]">
                <h2 className="text-3xl font-bold text-purple-600">TOUR BIỂN</h2>
                {/* <TourList className="mt-8" categoryName={'Biển'} /> */}
            </section>
            {/* TOUR Núi*/}
            <section className="py-8 bg-white text-center container mx-auto mt-[80px]">
                <h2 className="text-3xl font-bold text-purple-600">TOUR NÚI</h2>
                {/* <TourList className="mt-8" categoryName={'Núi'} /> */}
            </section>
            {/* Điểm đến yêu thích */}
            <section className="py-8 px-4">
                <h2 className="text-center text-2xl font-bold">ĐIỂM ĐẾN YÊU THÍCH</h2>
                <p className="text-center text-gray-600 mb-8">Các điểm đến du lịch trong nước và nước ngoài</p>
                <div className="flex flex-wrap justify-center">
                    <div className="relative w-1/6 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_1.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-60 object-cover rounded-lg"
                        />

                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                    <div className="relative w-1/6 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_2.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-60 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                    <div className="relative w-1/6 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_3.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-60 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                    <div className="relative w-1/6 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_4.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-60 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="relative w-1/7 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_6.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                    <div className="relative w-1/7 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_7.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                    <div className="relative w-1/7 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_8.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                    <div className="relative w-1/7 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_9.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                    <div className="relative w-1/7 m-2 hover:opacity-[0.8]">
                        <img
                            src="https://bizweb.dktcdn.net/100/478/747/themes/897047/assets/evo_tour_destination_image_10.jpg?1679559586112"
                            alt="Vịnh Hạ Long"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-semibold">Vịnh Hạ Long</h3>
                            <p className="text-sm" style={{ color: '#dfaa0f' }}>
                                Đã có 1,600+ lượt khách
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Bài Viết */}
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold text-center mb-4">Cảm Hứng Du Lịch</h1>
                <p className="text-center text-gray-600 mb-8">
                    Thông tin về du lịch, văn hóa, ẩm thực, các sự kiện và lễ hội tại các điểm đến Việt Nam, Đông Nam Á
                    và Thế Giới
                </p>

                <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newsItems.map((item, index) => (
                        <Link
                            to="/news"
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-[0.8]"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-6">
                    <button className="text-pink-500 font-semibold border-b-2 border-pink-500">
                        Xem tất cả tin tức
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
