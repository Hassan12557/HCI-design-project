import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Math', grade: 85 },
  { subject: 'Science', grade: 92 },
  { subject: 'English', grade: 78 },
  { subject: 'History', grade: 88 },
  { subject: 'Art', grade: 95 },
];

function PerformanceCard({ fullWidth = false }) {
  return (
    <div className={`card ${fullWidth ? 'col-span-full' : ''}`}>
      <h3 className="text-xl font-semibold mb-4">Academic Performance</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="grade" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceCard;