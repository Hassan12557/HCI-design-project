import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Present', value: 85 },
  { name: 'Absent', value: 15 },
];

const COLORS = ['#0ea5e9', '#ef4444'];

function AttendanceCard({ fullWidth = false }) {
  return (
    <div className={`card ${fullWidth ? 'col-span-full' : ''}`}>
      <h3 className="text-xl font-semibold mb-4">Attendance Overview</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceCard;