import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaPlaneDeparture } from 'react-icons/fa';

const SearchBar = () => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isDepartureDropdownOpen, setIsDepartureDropdownOpen] = useState(false);

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setIsDatePickerOpen(false);
    };

    const handleCityChange = (event) => {
        setDepartureCity(event.target.value);
        setIsDepartureDropdownOpen(false);
    };

    return (
        <div className="flex justify-center p-4">
            <div className="flex items-center justify-evenly p-4 bg-gray-200 rounded-lg shadow-md w-full max-w-3xl">
                {/* Ô nhập địa điểm */}
                <div className="flex   bg-white rounded-lg shadow">
                    <div className="p-2 text-gray-500">
                        <FaMapMarkerAlt />
                    </div>
                    <input type="text" placeholder="Bạn muốn đi đâu?" className="p-2 outline-none rounded-lg w-full" />
                </div>

                {/* Ô chọn ngày khởi hành */}
                <div className=" bg-white rounded-lg  p-2">
                    <div className=" flex items-center">
                        <FaCalendarAlt />
                        <span className=" ml-2">Ngày khởi hành</span>
                    </div>

                    <input type="date" className=" bg-white rounded-lg outline-none" />
                </div>

                {/* Ô chọn khởi hành từ */}
                <div className="relative flex  flex-col  mr-4 bg-white rounded-lg p-2">
                    <div className="flex items-center">
                        <FaPlaneDeparture />
                        <span className="ml-2">Khởi hành từ</span>
                    </div>

                    <select onChange={handleCityChange} className="outline-none ">
                        <option value="Tất cả">Tất cả</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="TP.HCM">TP.HCM</option>
                    </select>
                </div>

                {/* Nút tìm kiếm */}
                <button className="bg-purple-600 text-white rounded-lg  hover:bg-purple-700 px-16 py-2">TÌM</button>
            </div>
        </div>
    );
};

export default SearchBar;
