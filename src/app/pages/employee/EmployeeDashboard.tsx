import { motion } from 'motion/react';
import { Calendar, Clock, CheckCircle, AlertCircle, Award, LogOut } from 'lucide-react';

export function EmployeeDashboard() {
  const todayShift = {
    start: '10:00 AM',
    end: '6:00 PM',
    duration: '8 hours',
    status: 'on-duty',
  };

  const tasks = [
    { id: 1, task: 'Prepare breakfast service', status: 'completed', time: '10:00 AM' },
    { id: 2, task: 'Stock inventory', status: 'in-progress', time: '11:30 AM' },
    { id: 3, task: 'Customer training session', status: 'pending', time: '2:00 PM' },
    { id: 4, task: 'End of shift report', status: 'pending', time: '5:30 PM' },
  ];

  const performance = {
    rating: 4.8,
    attendance: '98%',
    punctuality: '100%',
    avgOrdersPerDay: '24',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome, Ahmed Khan</h1>
            <p className="text-gray-600 dark:text-gray-400">Head Chef • Lahore Branch</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
            <LogOut size={18} />
            Check Out
          </button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* Today's Shift */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock size={24} className="text-blue-600" />
                Today's Shift
              </h2>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Shift Start</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{todayShift.start}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Shift End</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{todayShift.end}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Duration</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{todayShift.duration}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-6 py-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-bold rounded-lg">
                ✓ On Duty
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Today's Tasks</h3>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        task.status === 'completed'
                          ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                          : task.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600'
                      }`}>
                        {task.status === 'completed' && <CheckCircle size={18} />}
                      </div>
                      <div>
                        <p className={`font-medium ${
                          task.status === 'completed'
                            ? 'text-gray-500 line-through'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {task.task}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{task.time}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      task.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : task.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Award size={20} className="text-yellow-600" />
              Performance
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Rating</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{performance.rating}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(performance.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Attendance</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{performance.attendance}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Punctuality</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{performance.punctuality}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Avg Orders/Day</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{performance.avgOrdersPerDay}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-lg p-6"
        >
          <div className="flex gap-4">
            <AlertCircle className="text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Announcement</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Staff training session scheduled for Friday at 3:00 PM. All kitchen staff are required to attend.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
