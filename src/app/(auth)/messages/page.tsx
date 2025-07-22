"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
    Search,
    Send,
    Paperclip,
    MoreVertical,
    Star,
    Archive,
    Trash2,
    Phone,
    Video,
    Info
} from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = useState(1);
    const [newMessage, setNewMessage] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const conversations = [
        {
            id: 1,
            name: "Sarah Johnson",
            lastMessage: "That sounds like a great approach for the React optimization. Let me know if you need any help with the implementation.",
            timestamp: "2 min ago",
            unread: 2,
            avatar: "/placeholder-profile.jpg",
            isOnline: true,
            messages: [
                {
                    id: 1,
                    sender: "Sarah Johnson",
                    content: "Hey! I saw your recent project on DevBran.ch. The architecture looks really solid!",
                    timestamp: "10:30 AM",
                    isMe: false
                },
                {
                    id: 2,
                    sender: "You",
                    content: "Thanks Sarah! I spent a lot of time on the performance optimizations. Are you working on anything similar?",
                    timestamp: "10:35 AM",
                    isMe: true
                },
                {
                    id: 3,
                    sender: "Sarah Johnson",
                    content: "Actually yes! I'm working on a React app that needs similar optimizations. Would love to discuss some patterns.",
                    timestamp: "10:40 AM",
                    isMe: false
                },
                {
                    id: 4,
                    sender: "You",
                    content: "Absolutely! I found that using React.memo and useMemo strategically can make a huge difference.",
                    timestamp: "10:42 AM",
                    isMe: true
                },
                {
                    id: 5,
                    sender: "Sarah Johnson",
                    content: "That sounds like a great approach for the React optimization. Let me know if you need any help with the implementation.",
                    timestamp: "10:45 AM",
                    isMe: false
                }
            ]
        },
        {
            id: 2,
            name: "Mike Chen",
            lastMessage: "Perfect! I'll review the pull request today and get back to you with feedback.",
            timestamp: "1 hour ago",
            unread: 0,
            avatar: "/placeholder-profile.jpg",
            isOnline: false,
            messages: [
                {
                    id: 1,
                    sender: "Mike Chen",
                    content: "Hi! I noticed you contributed to the open source project I'm maintaining. Great work!",
                    timestamp: "Yesterday 3:20 PM",
                    isMe: false
                },
                {
                    id: 2,
                    sender: "You",
                    content: "Thanks Mike! I really enjoyed working on it. The codebase is very well organized.",
                    timestamp: "Yesterday 3:25 PM",
                    isMe: true
                },
                {
                    id: 3,
                    sender: "Mike Chen",
                    content: "Perfect! I'll review the pull request today and get back to you with feedback.",
                    timestamp: "9:15 AM",
                    isMe: false
                }
            ]
        },
        {
            id: 3,
            name: "Alex Rodriguez",
            lastMessage: "The Docker setup looks good. I'll test it on my environment and let you know how it goes.",
            timestamp: "3 hours ago",
            unread: 1,
            avatar: "/placeholder-profile.jpg",
            isOnline: true,
            messages: [
                {
                    id: 1,
                    sender: "You",
                    content: "Hey Alex! I saw you're working with Docker and Kubernetes. I could use some advice on a deployment issue.",
                    timestamp: "Yesterday 5:00 PM",
                    isMe: true
                },
                {
                    id: 2,
                    sender: "Alex Rodriguez",
                    content: "Sure! What kind of issue are you running into?",
                    timestamp: "Yesterday 5:05 PM",
                    isMe: false
                },
                {
                    id: 3,
                    sender: "You",
                    content: "I'm having trouble with the networking configuration between containers. Mind if I share my docker-compose file?",
                    timestamp: "Yesterday 5:10 PM",
                    isMe: true
                },
                {
                    id: 4,
                    sender: "Alex Rodriguez",
                    content: "The Docker setup looks good. I'll test it on my environment and let you know how it goes.",
                    timestamp: "7:30 AM",
                    isMe: false
                }
            ]
        },
        {
            id: 4,
            name: "Emily Davis",
            lastMessage: "I'd love to collaborate on the UI design. When would be a good time to schedule a call?",
            timestamp: "1 day ago",
            unread: 0,
            avatar: "/placeholder-profile.jpg",
            isOnline: false,
            messages: [
                {
                    id: 1,
                    sender: "Emily Davis",
                    content: "Hi! I saw your project and the UI looks amazing. I'm a UX designer and would love to collaborate!",
                    timestamp: "Yesterday 11:00 AM",
                    isMe: false
                },
                {
                    id: 2,
                    sender: "You",
                    content: "That would be fantastic! I could definitely use some help with the user experience flow.",
                    timestamp: "Yesterday 11:30 AM",
                    isMe: true
                },
                {
                    id: 3,
                    sender: "Emily Davis",
                    content: "I'd love to collaborate on the UI design. When would be a good time to schedule a call?",
                    timestamp: "Yesterday 11:45 AM",
                    isMe: false
                }
            ]
        }
    ];

    const currentConversation = conversations.find(c => c.id === selectedConversation);

    const filteredConversations = conversations.filter(conversation =>
        conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Here you would typically send the message to your backend
            console.log("Sending message:", newMessage);
            setNewMessage("");
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#565264]">Messages</h1>
                    <p className="text-[#565264]/70">Connect and collaborate with your network</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-[#56876D]/20 text-[#56876D]">
                        {conversations.reduce((sum, conv) => sum + conv.unread, 0)} unread
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                {/* Conversations List */}
                <Card className="lg:col-span-1">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-[#565264]">Conversations</CardTitle>
                            <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#565264]/60" />
                            <Input
                                placeholder="Search messages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="space-y-1 max-h-96 overflow-y-auto">
                            {filteredConversations.map((conversation) => (
                                <button
                                    key={conversation.id}
                                    onClick={() => setSelectedConversation(conversation.id)}
                                    className={`w-full p-4 text-left hover:bg-[#E7EBC5]/30 transition-colors border-l-2 ${selectedConversation === conversation.id
                                            ? 'bg-[#E7EBC5]/30 border-[#56876D]'
                                            : 'border-transparent'
                                        }`}
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className="relative">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={conversation.avatar} alt={conversation.name} />
                                                <AvatarFallback className="bg-[#56876D] text-white text-sm">
                                                    {conversation.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            {conversation.isOnline && (
                                                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-medium text-[#565264] truncate text-sm">
                                                    {conversation.name}
                                                </h4>
                                                <div className="flex items-center space-x-1">
                                                    <span className="text-xs text-[#565264]/50">
                                                        {conversation.timestamp}
                                                    </span>
                                                    {conversation.unread > 0 && (
                                                        <div className="h-2 w-2 bg-[#56876D] rounded-full" />
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-xs text-[#565264]/70 truncate mt-1">
                                                {conversation.lastMessage}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Chat Area */}
                <Card className="lg:col-span-2">
                    {currentConversation ? (
                        <>
                            {/* Chat Header */}
                            <CardHeader className="border-b border-[#565264]/10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="relative">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={currentConversation.avatar} alt={currentConversation.name} />
                                                <AvatarFallback className="bg-[#56876D] text-white">
                                                    {currentConversation.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            {currentConversation.isOnline && (
                                                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-[#565264]">{currentConversation.name}</h3>
                                            <p className="text-sm text-[#565264]/60">
                                                {currentConversation.isOnline ? 'Online' : 'Last seen recently'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="ghost" size="sm">
                                            <Phone className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Video className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Info className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>

                            {/* Messages */}
                            <CardContent className="p-4">
                                <div className="space-y-4 h-80 overflow-y-auto">
                                    {currentConversation.messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.isMe
                                                    ? 'bg-[#56876D] text-white'
                                                    : 'bg-[#E7EBC5]/40 text-[#565264]'
                                                }`}>
                                                <p className="text-sm">{message.content}</p>
                                                <p className={`text-xs mt-1 ${message.isMe ? 'text-white/70' : 'text-[#565264]/50'
                                                    }`}>
                                                    {message.timestamp}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Message Input */}
                                <div className="mt-4 flex items-end space-x-2">
                                    <Button variant="ghost" size="sm" className="mb-2">
                                        <Paperclip className="h-4 w-4" />
                                    </Button>
                                    <Textarea
                                        placeholder="Type your message..."
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                handleSendMessage();
                                            }
                                        }}
                                        className="flex-1 min-h-[40px] max-h-32 resize-none"
                                        rows={1}
                                    />
                                    <Button
                                        onClick={handleSendMessage}
                                        disabled={!newMessage.trim()}
                                        className="bg-[#56876D] hover:bg-[#56876D]/90 text-white mb-2"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </>
                    ) : (
                        <CardContent className="h-full flex items-center justify-center">
                            <div className="text-center space-y-2">
                                <div className="h-12 w-12 bg-[#565264]/10 rounded-full flex items-center justify-center mx-auto">
                                    <Send className="h-6 w-6 text-[#565264]/40" />
                                </div>
                                <h3 className="font-medium text-[#565264]">Select a conversation</h3>
                                <p className="text-sm text-[#565264]/60">Choose a conversation to start messaging</p>
                            </div>
                        </CardContent>
                    )}
                </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="p-4 text-center">
                        <Star className="h-8 w-8 text-[#56876D] mx-auto mb-2" />
                        <h4 className="font-medium text-[#565264] mb-1">Starred Messages</h4>
                        <p className="text-sm text-[#565264]/60">View your important messages</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <Archive className="h-8 w-8 text-[#56876D] mx-auto mb-2" />
                        <h4 className="font-medium text-[#565264] mb-1">Archived Chats</h4>
                        <p className="text-sm text-[#565264]/60">Access your archived conversations</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 text-center">
                        <Trash2 className="h-8 w-8 text-[#56876D] mx-auto mb-2" />
                        <h4 className="font-medium text-[#565264] mb-1">Deleted Messages</h4>
                        <p className="text-sm text-[#565264]/60">Recover recently deleted messages</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
