import adminApi from '../../api/adminApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function AdminTourAddPage() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        destination: '',
        price: '',
        duration: '',
        startDate: '',
        endDate: '',
        capacity: '',
        availableSlots: '',
        rating: '1',
        nameCategory: 'Biển',
        image: null // For storing the file
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Tên tour là bắt buộc.';
        if (!formData.description.trim()) newErrors.description = 'Mô tả là bắt buộc.';
        if (!formData.destination.trim()) newErrors.destination = 'Điểm đến là bắt buộc.';
        if (!formData.price || isNaN(formData.price) || formData.price <= 0) newErrors.price = 'Giá phải là số dương.';
        if (!formData.duration.trim()) newErrors.duration = 'Khoảng thời gian là bắt buộc.';
        if (!formData.startDate) newErrors.startDate = 'Ngày bắt đầu là bắt buộc.';
        if (!formData.endDate) newErrors.endDate = 'Ngày kết thúc là bắt buộc.';
        if (!formData.capacity || isNaN(formData.capacity) || formData.capacity <= 0)
            newErrors.capacity = 'Số lượng khách phải là số dương.';
        if (!formData.availableSlots || isNaN(formData.availableSlots) || formData.availableSlots < 0)
            newErrors.availableSlots = 'Số lượng còn trống phải là số không âm.';
        if (!formData.image) newErrors.image = 'Hình ảnh là bắt buộc.';
        if (!formData.rating) newErrors.rating = 'Đánh giá là bắt buộc.';

        if (formData.endDate < formData.startDate) newErrors.endDate = 'Ngày kết thúc phải sau ngày bắt đầu.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Trả về true nếu không có lỗi
    };
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0] // Save the selected file
            });
        } else {
            setFormData({
                ...formData,
                [name]: value // Save other input values
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true); // Bắt đầu xử lý
        try {
            const result = await adminApi.addTour(formData);
            console.log('Tour added successfully:', result);
            toast.success('Thêm Tour Thành Công!!!');
            setIsSubmitting(false);
            // You can redirect or show a success message here
        } catch (error) {
            console.error('Error submitting the form:', error);
            toast.error('Thêm Tour thất bại');
            setIsSubmitting(false);
        }
    };
    const fetchAllCategories = async () => {
        try {
            const response = await adminApi.getAllCategories(); // Gọi API lấy danh sách
            setCategories(response); // Lưu danh sách vào state
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        fetchAllCategories(); // Fetch danh sách danh mục khi component được mount
    }, []);
    return (
        <div className=" bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-purple-900">Thêm Tour</h1>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md"
            >
                {/* Left Column */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên tour</label>
                    <input
                        name="name"
                        value={formData.name ? formData.name : ''} // Gán giá trị từ state
                        onChange={handleChange}
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Nhập tên tour"
                    />
                    <p className="text-red-500 text-sm">{errors.name}</p>

                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Mô tả</label>
                    <textarea
                        name="description"
                        value={formData.description ? formData.description : ''}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Nhập mô tả"
                    ></textarea>
                    <p className="text-red-500 text-sm">{errors.description}</p>

                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Điểm đến</label>
                    <input
                        name="destination"
                        value={formData.destination ? formData.destination : ''} // Gán giá trị từ state
                        onChange={handleChange}
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Nhập điểm đến"
                    />
                    <p className="text-red-500 text-sm">{errors.destination}</p>

                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Mức đánh giá</label>
                    <select
                        name="rating"
                        value={formData.rating} // Gán giá trị từ state
                        onChange={handleChange} // Khi thay đổi, cập nhật state
                        className="w-[50%] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <p className="text-red-500 text-sm">{errors.rating}</p>
                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
                        Nhập số lượng khách tối đa
                    </label>
                    <input
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Nhập số lương khách tối đa"
                    />
                    <p className="text-red-500 text-sm">{errors.capacity}</p>
                    <button className="mt-4">
                        <label htmlFor="upload" className="cursor-pointer flex items-center">
                            Tải ảnh lên
                        </label>
                        <input id="upload" type="file" name="image" onChange={handleChange} accept="image/*" />
                    </button>
                    <p className="text-red-500 text-sm">{errors.image}</p>
                </div>

                {/* Right Column */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Danh Mục</label>
                    <select
                        name="nameCategory"
                        value={formData.nameCategory} // Gán giá trị từ state
                        onChange={handleChange} // Khi thay đổi, cập nhật state
                        className="w-[50%] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                    >
                        {categories.map((category) => (
                            <option key={category.categoryId} value={category.name} className="">
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <p className="text-red-500 text-sm">{errors.nameCategory}</p>

                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Giá</label>
                    <input
                        name="price"
                        value={formData.price ? formData.price : ''} // Gán giá trị từ state
                        onChange={handleChange}
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Nhập giá"
                    />
                    <p className="text-red-500 text-sm">{errors.price}</p>
                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Khoảng thời gian</label>
                    <input
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Nhập khoảng thời gian"
                    />
                    <p className="text-red-500 text-sm">{errors.duration}</p>
                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Ngày bắt đầu</label>
                    <input
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                    />
                    <p className="text-red-500 text-sm">{errors.startDate}</p>
                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Ngày kết thúc</label>
                    <input
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                    />
                    <p className="text-red-500 text-sm">{errors.endDate}</p>
                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">Số lượng còn trống</label>
                    <input
                        name="availableSlots"
                        value={formData.availableSlots}
                        onChange={handleChange}
                        type="number"
                        className="w-[50%] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Nhập số lượng"
                    />
                    <p className="text-red-500 text-sm">{errors.availableSlots}</p>
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center justify-center hover:cursor-pointer"
                        disabled={isSubmitting} // Vô hiệu hóa khi đang xử lý
                    >
                        {isSubmitting ? (
                            <div className="flex items-center">
                                {/* Spinner với màu sắc thay đổi */}
                                <div className="w-10 h-10 border-8 border-t-8 border-purple-500 border-solid rounded-full animate-spin bg-gradient-to-r from-purple-500 to-green-500 bg-green-500 mr-2"></div>
                                <span>Đang thêm Tour...</span>
                            </div>
                        ) : (
                            'Thêm Tour'
                        )}
                    </button>
                    <button className="bg-gray-300 text-black p-2 rounded-md mt-4 ml-2">Hủy</button>
                </div>
            </form>
        </div>
    );
}
