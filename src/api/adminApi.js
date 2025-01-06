import axiosClient from './axiosClient';
const adminApi = {
    // Function to add a new tour
    addTour: async (data) => {
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('description', data.description);
            formData.append('destination', data.destination);
            formData.append('price', data.price);
            formData.append('duration', data.duration);
            formData.append('startDate', data.startDate);
            formData.append('endDate', data.endDate);
            formData.append('capacity', data.capacity);
            formData.append('availableSlots', data.availableSlots);
            formData.append('rating', data.rating);
            formData.append('nameCategory', data.nameCategory);
            formData.append('image', data.image); // Assuming image is a File object

            // Send POST request with form data
            const response = await axiosClient.post('/tours/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return response.data; // Response from the API
        } catch (error) {
            console.error('Error adding tour:', error);
            throw error; // Throw error to be handled by calling function
        }
    },
    deleteTour: async (id) => {
        try {
            // Send DELETE request
            const response = await axiosClient.delete(`/tours/delete/${id}`);
            return response.data; // Response from the API
        } catch (error) {
            console.error(`Error deleting tour:${id}`, error);
            throw error; // Throw error to be handled by calling function
        }
    },
    getAllCategories: async () => {
        try {
            const response = await axiosClient.get('/categories/all');
            return response.data; // Trả về danh sách danh mục
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    }
};
export default adminApi;
