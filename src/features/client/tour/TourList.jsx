import userApi from '../../../api/userApi';
import TourCard from './TourCard';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'; // Import format từ date-fns

const TourList = ({ categoryName, home = false }) => {
    const [tours, setTours] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                // Kiểm tra nếu categoryName là 'all', gọi API lấy tất cả các tour
                const response =
                    categoryName === 'all'
                        ? await userApi.getAllTours() // API này bạn phải gọi API lấy tất cả các tour
                        : await userApi.getToursByCategory(categoryName); // API lấy các tour theo danh mục

                setTours(response.data); // Giả sử API trả về dữ liệu trong `data`
                console.log('response:', response);
            } catch (err) {
                setError(err.message || 'Something went wrong!');
            }
        };

        fetchTours();
    }, [categoryName]);

    // Nếu biến home là true, chỉ lấy 4 tour đầu tiên
    const toursToDisplay = home ? tours.slice(0, 8) : tours;

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toursToDisplay.map((tour) => (
                <TourCard
                    key={tour.tourId}
                    id={tour.tourId}
                    image={tour.images}
                    title={tour.name}
                    price={tour.price}
                    // Chuyển đổi startDate thành định dạng DD/MM/YYYY
                    startDate={format(new Date(tour.startDate), 'dd/MM/yyyy')}
                    duration={tour.duration}
                />
            ))}
        </div>
    );
};

export default TourList;
