import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:8000'); // URL backend của bạn

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng hộp chat
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [receiverId, setReceiverId] = useState(null);

    const messagesEndRef = useRef(null); // Ref cho container tin nhắn
    const user = useSelector((state) => state.client.user); // Lấy thông tin user từ Redux
    const navigate = useNavigate();

    // Cuộn xuống cuối khi messages thay đổi
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        const fetchAdminChatId = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/auth/adminChat');
                setReceiverId(response.data.adminId);
                console.log('AdminChat ID:', response.data.adminId);
            } catch (error) {
                console.error('Error fetching adminChat ID:', error);
            }
        };

        fetchAdminChatId();
    }, []);

    useEffect(() => {
        if (!user) return;

        // Kết nối Socket.IO khi user đã đăng nhập
        socket.emit('joinRoom', {
            senderId: user.user.id,
            receiverId: receiverId
        });

        // Lắng nghe tin nhắn khi tham gia phòng
        socket.on('roomMessages', (messages) => {
            console.log('Room messages:', messages);
            setMessages(messages);
        });

        const handleMessageReceived = (message) => {
            console.log('Message received:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.on('messageReceived', handleMessageReceived);

        // Cleanup
        return () => {
            socket.off('messageReceived', handleMessageReceived);
        };
    }, [user]);

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
            senderId: user.user.id,
            receiverId: receiverId,
            content: inputMessage
        });

        setInputMessage('');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="p-3 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600"
                >
                    Chat
                </button>
            )}

            {isOpen && (
                <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
                    <div className="flex items-center justify-between bg-red-500 text-white p-3 rounded-t-lg">
                        <span className="font-bold">Hỗ trợ trực tuyến</span>
                        <button onClick={toggleChat} className="text-white">
                            Đóng
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 flex ${msg.sender === user.user.id ? 'justify-end' : 'justify-start'}`}
                            >
                                <span
                                    className={`inline-block px-3 py-2 rounded-lg ${
                                        msg.sender === user.user.id
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {msg.content}
                                </span>
                            </div>
                        ))}
                        {/* Phần tử ẩn để cuộn đến */}
                        <div ref={messagesEndRef} />
                    </div>

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
