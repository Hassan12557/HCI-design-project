import { useState } from 'react';
import { FaEnvelope, FaCalendarPlus, FaFileDownload } from 'react-icons/fa';
import { playNotificationSound } from '../utils/notification';

function QuickActions({ fullWidth = false }) {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [messageForm, setMessageForm] = useState({ teacher: '', message: '' });
  const [meetingForm, setMeetingForm] = useState({ date: '', time: '', reason: '' });

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    playNotificationSound();
    setShowMessageModal(false);
    setMessageForm({ teacher: '', message: '' });
    alert('Message sent successfully!');
  };

  const handleMeetingRequest = (e) => {
    e.preventDefault();
    playNotificationSound();
    setShowMeetingModal(false);
    setMeetingForm({ date: '', time: '', reason: '' });
    alert('Meeting requested successfully!');
  };

  const handleDownloadReport = () => {
    const dummyReport = `Student Progress Report\nDate: ${new Date().toLocaleDateString()}\nGenerated for demonstration purposes`;
    const blob = new Blob([dummyReport], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    playNotificationSound();
  };

  return (
    <div className={`card ${fullWidth ? 'col-span-full' : ''}`}>
      <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button
          onClick={() => setShowMessageModal(true)}
          className="flex items-center justify-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-primary-600"><FaEnvelope /></span>
          <span>Message Teacher</span>
        </button>
        <button
          onClick={() => setShowMeetingModal(true)}
          className="flex items-center justify-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-primary-600"><FaCalendarPlus /></span>
          <span>Request Meeting</span>
        </button>
        <button
          onClick={handleDownloadReport}
          className="flex items-center justify-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-primary-600"><FaFileDownload /></span>
          <span>Download Report</span>
        </button>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h4 className="text-xl font-semibold mb-4">Message Teacher</h4>
            <form onSubmit={handleMessageSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teacher</label>
                  <select
                    className="input-field mt-1"
                    value={messageForm.teacher}
                    onChange={(e) => setMessageForm({...messageForm, teacher: e.target.value})}
                    required
                  >
                    <option value="">Select Teacher</option>
                    <option value="ms-johnson">Ms. Johnson</option>
                    <option value="mr-smith">Mr. Smith</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    className="input-field mt-1"
                    rows="4"
                    value={messageForm.message}
                    onChange={(e) => setMessageForm({...messageForm, message: e.target.value})}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowMessageModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Meeting Modal */}
      {showMeetingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h4 className="text-xl font-semibold mb-4">Request Meeting</h4>
            <form onSubmit={handleMeetingRequest}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    className="input-field mt-1"
                    value={meetingForm.date}
                    onChange={(e) => setMeetingForm({...meetingForm, date: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    className="input-field mt-1"
                    value={meetingForm.time}
                    onChange={(e) => setMeetingForm({...meetingForm, time: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Reason for Meeting</label>
                  <textarea
                    className="input-field mt-1"
                    rows="3"
                    value={meetingForm.reason}
                    onChange={(e) => setMeetingForm({...meetingForm, reason: e.target.value})}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowMeetingModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Request Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuickActions;