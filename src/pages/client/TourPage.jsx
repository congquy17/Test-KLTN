import SearchBar from '../../components/SearchBar';
import TourList from '../../features/client/tour/TourList';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
export default function TourPage() {
    const [sortOption, setSortOption] = useState('Tên A-Z');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };
    return (
        <div className="container mx-auto p-4">
            {/* Thanh tìm kiếm */}
            <SearchBar />
            {/* Bộ lọc sắp xếp */}
            <div className="container">
                <span>Xếp theo:</span>
                <select value={sortOption} onChange={handleSortChange} className="p-2 border rounded">
                    <option value="Tên A-Z">Tên A-Z</option>
                    <option value="Tên Z-A">Tên Z-A</option>
                    <option value="Giá tăng dần">Giá tăng dần</option>
                    <option value="Giá giảm dần">Giá giảm dần</option>
                </select>
            </div>
            {/* Featured Tours Section */}
            <section className="mb-4 bg-white text-center container mx-auto">
                <TourList className="mt-8" categoryName={'all'} />
            </section>
            <div className="container mx-auto mb-10 flex justify-center gap-8">
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
        </div>
    );
}
