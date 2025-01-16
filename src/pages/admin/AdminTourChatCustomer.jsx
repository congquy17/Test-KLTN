import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

const AdminTourChatCustomer = () => {
    const user = useSelector((state) => state.client.user);
    const adminId = user ? user.user.id : '677e27e60169b7a322518c0f';
    const [conversations, setConversations] = useState([]); // Danh sách các cuộc hội thoại
    const [selectedChat, setSelectedChat] = useState(null); // Cuộc hội thoại đang được chọn
    const [messages, setMessages] = useState([]); // Nội dung tin nhắn trong cuộc hội thoại
    const [newMessage, setNewMessage] = useState(''); // Tin nhắn mới

    useEffect(() => {
        // Lấy danh sách conversations khi component load
        socket.emit('getAdminConversations', { adminId });

        // Lắng nghe danh sách cuộc hội thoại
        socket.on('adminConversationsList', (data) => {
            console.log('Conversations:', data);
            setConversations(data);
        });

        return () => {
            socket.off('adminConversationsList');
        };
    }, []);

    // Khi admin click vào một cuộc hội thoại
    const openChat = (chat) => {
        setSelectedChat(chat);
        setMessages(chat.messages); // Hiển thị tin nhắn của cuộc hội thoại
    };
    useEffect(() => {
        if (!adminId || !selectedChat?.user?._id) return;

        // // Kết nối Socket.IO khi user đã đăng nhập
        socket.emit('joinRoom', {
            senderId: adminId, // Thay bằng ObjectId hợp lệ
            receiverId: selectedChat.user._id // Thay bằng ObjectId hợp lệ
        });

        // Lắng nghe tin nhắn khi tham gia phòng
        socket.on('roomMessages', (messages) => {
            console.log('Room messages:', messages);
            setMessages(messages); // Cập nhật danh sách tin nhắn vào state
        });
        // Đảm bảo chỉ lắng nghe một lần
        const handleMessageReceived = (message) => {
            console.log('Message received:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.on('messageReceived', handleMessageReceived);

        // Cleanup: Gỡ bỏ sự kiện khi component unmount
        return () => {
            socket.off('messageReceived', handleMessageReceived);
        };
    }, [selectedChat]);
    const sendMessage = () => {
        if (!newMessage.trim()) return;

        socket.emit('sendMessage', {
            senderId: adminId,
            receiverId: selectedChat.user._id,
            content: newMessage
        });

        setNewMessage(''); // Xóa nội dung input sau khi gửi
    };
    const messagesEndRef = useRef(null);

    // Hàm cuộn đến tin nhắn cuối cùng
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Cuộn xuống khi danh sách tin nhắn thay đổi
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (
        <div className="flex h-screen">
            {/* Danh sách cuộc hội thoại */}
            <div className="w-1/3 border-r overflow-y-auto">
                <h3 className="p-4 font-bold">Danh sách hội thoại</h3>
                {conversations.map(
                    (chat) => (
                        console.log('haaa', chat.user.avatar),
                        (
                            <div
                                key={chat._id}
                                onClick={() => openChat(chat)}
                                className={`p-4 cursor-pointer hover:bg-gray-200 ${
                                    selectedChat?._id === chat._id ? 'bg-gray-300' : ''
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <img src={chat.user.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h4 className="font-bold">{chat.user.name}</h4>
                                        <p className="text-sm text-gray-600">
                                            {chat.messages[chat.messages.length - 1]?.content || 'Chưa có tin nhắn'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                )}
            </div>

            {/* Phần chi tiết cuộc trò chuyện */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b bg-gray-100">
                    {selectedChat ? (
                        <h3 className="font-bold">{selectedChat.user.name}</h3>
                    ) : (
                        <h3 className="font-bold">Chọn một hội thoại để bắt đầu</h3>
                    )}
                </div>

                {/* Nội dung tin nhắn */}
                <div className="flex-1 overflow-y-auto p-4">
                    {selectedChat ? (
                        <>
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 flex ${msg.sender === adminId ? 'justify-end' : 'justify-start'}`}
                                >
                                    <span
                                        className={`inline-block px-3 py-2 rounded-lg ${
                                            msg.sender === adminId
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 text-gray-800'
                                        }`}
                                    >
                                        {msg.content}
                                    </span>
                                </div>
                            ))}
                            {/* Phần tử ẩn để cuộn xuống */}
                            <div ref={messagesEndRef}></div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500">Không có tin nhắn nào để hiển thị.</p>
                    )}
                </div>

                {/* Gửi tin nhắn */}
                {selectedChat && (
                    <div className="p-4 border-t flex items-center">
                        <input
                            type="text"
                            className="flex-1 border rounded-lg px-3 py-2"
                            placeholder="Nhập tin nhắn..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
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
                )}
            </div>
        </div>
    );
};

export default AdminTourChatCustomer;
