import { Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaChartBar, FaCalendarAlt, FaSmile, FaEnvelope, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { useUser } from '../context/UserContext';
import PerformanceCard from './PerformanceCard';
import AttendanceCard from './AttendanceCard';
import MoodTrackerCard from './MoodTrackerCard';
import MessagesCard from './MessagesCard';
import QuickActions from './QuickActions';
import Settings from './Settings';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useUser();

  const navItems = [
    { path: '', icon: <FaChartBar />, text: 'Dashboard' },
    { path: 'performance', icon: <FaChartBar />, text: 'Performance' },
    { path: 'attendance', icon: <FaCalendarAlt />, text: 'Attendance' },
    { path: 'mood', icon: <FaSmile />, text: 'Emotional Reports' },
    { path: 'messages', icon: <FaEnvelope />, text: 'Messages' },
    { path: 'settings', icon: <FaCog />, text: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary-600">Parent Portal</h2>
          <nav className="mt-8 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-100 text-primary-600'
                      : 'hover:bg-gray-100'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      <main className={`lg:ml-64 p-6`}>
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Hello, {user?.name || 'Guest'}!</h1>
          </header>

          <Routes>
            <Route path="" element={
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PerformanceCard />
                <AttendanceCard />
                <MoodTrackerCard />
                <MessagesCard />
                <QuickActions />
              </div>
            } />
            <Route path="performance" element={
              <div className="space-y-6">
                <PerformanceCard fullWidth />
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Detailed Performance Analysis</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">View detailed academic performance metrics and progress over time.</p>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Current GPA</h4>
                        <p className="text-2xl font-bold text-primary-600">3.8</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Class Rank</h4>
                        <p className="text-2xl font-bold text-primary-600">5/120</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Completed Assignments</h4>
                        <p className="text-2xl font-bold text-primary-600">95%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="attendance" element={
              <div className="space-y-6">
                <AttendanceCard fullWidth />
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Attendance Details</h3>
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Total School Days</h4>
                        <p className="text-2xl font-bold text-primary-600">180</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Days Present</h4>
                        <p className="text-2xl font-bold text-primary-600">172</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Days Absent</h4>
                        <p className="text-2xl font-bold text-primary-600">8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="mood" element={
              <div className="space-y-6">
                <MoodTrackerCard fullWidth />
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Emotional Well-being Analysis</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Track your child's emotional well-being and identify patterns over time.</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Most Common Mood</h4>
                        <p className="text-2xl">😊 Happy</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Mood Trend</h4>
                        <p className="text-green-600">Positive and stable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="messages" element={
              <div className="space-y-6">
                <MessagesCard fullWidth />
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Message Statistics</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold">Total Messages</h4>
                      <p className="text-2xl font-bold text-primary-600">24</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold">Unread Messages</h4>
                      <p className="text-2xl font-bold text-primary-600">2</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold">Response Rate</h4>
                      <p className="text-2xl font-bold text-primary-600">92%</p>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;