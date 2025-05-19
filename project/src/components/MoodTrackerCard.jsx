const moods = [
  { date: '2024-03-18', mood: '😊', description: 'Happy' },
  { date: '2024-03-17', mood: '😴', description: 'Tired' },
  { date: '2024-03-16', mood: '😢', description: 'Sad' },
  { date: '2024-03-15', mood: '😊', description: 'Happy' },
];

function MoodTrackerCard({ fullWidth = false }) {
  return (
    <div className={`card ${fullWidth ? 'col-span-full' : ''}`}>
      <h3 className="text-xl font-semibold mb-4">Emotional Well-being</h3>
      <div className="space-y-4">
        {moods.map((entry, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <span className="text-2xl">{entry.mood}</span>
            <div>
              <p className="font-medium">{entry.description}</p>
              <p className="text-sm text-gray-500">{entry.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodTrackerCard;