import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000'); // URL backend của bạn

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng hộp chat
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const user = useSelector((state) => state.client.user); // Lấy thông tin user từ Redux
    const navigate = useNavigate();

    useEffect(() => {
        // Nếu không có thông tin người dùng, chuyển về trang đăng nhập
        console.log('user', user);
        // Kết nối Socket.IO khi user đã đăng nhập
        socket.emit('joinChat', {
            userId: '64b9dcf2e85f8f1234567890', // Thay bằng ObjectId hợp lệ
            adminId: '64b9dcf2e85f8f0987654321' // Thay bằng ObjectId hợp lệ
        }); // adminId có thể thay bằng giá trị thực tế

        socket.on('roomChat', (chat) => {
            setMessages(chat.messages); // Cập nhật tin nhắn
        });

        return () => {
            socket.disconnect(); // Ngắt kết nối khi component unmount
        };
    }, []);

    const toggleChat = () => {
        if (!user) {
            navigate('/signin');
            return;
        }
        setIsOpen(!isOpen);
    };

    const sendMessage = () => {
        if (inputMessage.trim() === '') return;

        // Gửi tin nhắn lên server
        socket.emit('sendMessage', {
            // Thay bằng ObjectId hợp lệ
            userId: '64b9dcf2e85f8f1234567890', // Thay bằng ObjectId hợp lệ
            adminId: '64b9dcf2e85f8f0987654321', // Thay bằng ObjectId hợp lệ
            content: inputMessage
        });

        // Hiển thị tin nhắn trên giao diện
        setMessages((prev) => [
            ...prev,
            { sender: '64b9dcf2e85f8f1234567890', adminId: '64b9dcf2e85f8f0987654321', content: inputMessage }
        ]);

        setInputMessage(''); // Xóa input sau khi gửi
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Biểu tượng chat */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="p-3 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600"
                >
                    Chat
                </button>
            )}

            {/* Hộp chat */}
            {isOpen && (
                <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-red-500 text-white p-3 rounded-t-lg">
                        <span className="font-bold">Hỗ trợ trực tuyến</span>
                        <button onClick={toggleChat} className="text-white">
                            Đóng
                        </button>
                    </div>

                    {/* Danh sách tin nhắn */}
                    <div className="flex-1 overflow-y-auto p-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 flex ${
                                    msg.sender === '64b9dcf2e85f8f1234567890' ? 'justify-end' : 'justify-start'
                                }`}
                            >
                                <span
                                    className={`inline-block px-3 py-2 rounded-lg ${
                                        msg.sender === '64b9dcf2e85f8f1234567890'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {msg.content}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex p-3 border-t">
                        <input
                            type="text"
                            className="flex-1 border rounded-lg px-3 py-2"
                            placeholder="Nhập tin nhắn..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') sendMessage();
                            }}
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
