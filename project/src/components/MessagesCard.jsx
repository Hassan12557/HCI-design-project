import { useState } from 'react';
import { playNotificationSound } from '../utils/notification';

const initialMessages = [
  {
    id: 1,
    teacher: 'Ms. Johnson',
    subject: 'Math homework update',
    message: 'Great progress on the recent algebra assignment!',
    date: '2024-03-18',
    replies: [],
  },
  {
    id: 2,
    teacher: 'Mr. Smith',
    subject: 'Science project reminder',
    message: 'Don\'t forget about the upcoming science fair project due next week.',
    date: '2024-03-17',
    replies: [],
  },
];

function MessagesCard({ fullWidth = false }) {
  const [messages, setMessages] = useState(initialMessages);
  const [replyText, setReplyText] = useState('');
  const [activeReply, setActiveReply] = useState(null);

  const handleReply = (messageId) => {
    if (replyText.trim()) {
      setMessages(messages.map(msg => {
        if (msg.id === messageId) {
          return {
            ...msg,
            replies: [...msg.replies, {
              id: Date.now(),
              text: replyText,
              date: new Date().toISOString().split('T')[0]
            }]
          };
        }
        return msg;
      }));
      setReplyText('');
      setActiveReply(null);
      playNotificationSound();
    }
  };

  return (
    <div className={`card ${fullWidth ? 'col-span-full' : ''}`}>
      <h3 className="text-xl font-semibold mb-4">Recent Messages</h3>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="border-b border-gray-200 pb-4 last:border-0">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{message.teacher}</h4>
              <span className="text-sm text-gray-500">{message.date}</span>
            </div>
            <p className="text-sm font-medium text-gray-700 mb-1">{message.subject}</p>
            <p className="text-sm text-gray-600">{message.message}</p>
            
            {message.replies.map(reply => (
              <div key={reply.id} className="ml-4 mt-2 p-2 bg-gray-50 rounded">
                <p className="text-sm text-gray-600">{reply.text}</p>
                <span className="text-xs text-gray-500">{reply.date}</span>
              </div>
            ))}

            {activeReply === message.id ? (
              <div className="mt-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full p-2 border rounded-lg text-sm"
                  placeholder="Type your reply..."
                  rows="2"
                />
                <div className="mt-2 space-x-2">
                  <button 
                    onClick={() => handleReply(message.id)}
                    className="btn-primary text-sm"
                  >
                    Send
                  </button>
                  <button 
                    onClick={() => {
                      setActiveReply(null);
                      setReplyText('');
                    }}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button 
                className="btn-primary mt-2 text-sm"
                onClick={() => setActiveReply(message.id)}
              >
                Reply
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagesCard;