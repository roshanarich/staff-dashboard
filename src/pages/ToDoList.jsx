import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  const handleEditTask = (id, title) => {
    setEditingId(id);
    setTask(title);
  };

  const handleSaveTask = () => {
    setTasks(tasks.map((t) => (t.id === editingId ? { ...t, title: task } : t)));
    setTask("");
    setEditingId(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-start justify-center p-6">
      <div className="bg-white w-full max-w-xl p-8 rounded-xl shadow-lg border-2 border-orange-500">
        <h2 className="text-3xl font-bold mb-6 text-black text-center">To-Do List</h2>

        {/* Insert task */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 border border-black/20 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter a task"
          />
          {editingId ? (
            <button
              onClick={handleSaveTask}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-md"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleAddTask}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-md"
            >
              Add
            </button>
          )}
        </div>

        {/* List of Tasks */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-black mb-4">Your Tasks</h3>

          {tasks.length === 0 ? (
            <div className="text-center text-black/50 mt-4">
              <PlusCircle className="mx-auto mb-2 text-orange-400" size={40} />
              <p className="text-sm">No tasks yet. Add one above.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    task.completed ? "bg-orange-100 line-through text-black/40" : "bg-white"
                  } hover:shadow-md transition duration-200`}
                >
                  <span
                    className="flex-1 cursor-pointer"
                    onClick={() => handleToggleComplete(task.id)}
                  >
                    {task.title}
                  </span>
                  <div className="flex gap-2 ml-4 text-sm">
                    <button
                      onClick={() => handleEditTask(task.id, task.title)}
                      className="text-orange-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="text-black hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
