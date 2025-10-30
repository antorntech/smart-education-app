import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faEdit,
  faTrash,
  faBook,
  faClock,
  faLayerGroup,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const Routine = () => {
  const [routines, setRoutines] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [newRoutine, setNewRoutine] = useState({
    subject: "",
    type: "Theory",
    startHour: "",
    startMinute: "",
    startPeriod: "AM",
    endHour: "",
    endMinute: "",
    endPeriod: "AM",
    priority: "Normal",
    completed: false,
  });

  const handleAddOrUpdate = () => {
    const { subject, startHour, startMinute, endHour, endMinute } = newRoutine;
    if (!subject || !startHour || !startMinute || !endHour || !endMinute)
      return;

    if (editingId) {
      setRoutines(
        routines.map((r) => (r.id === editingId ? { ...r, ...newRoutine } : r))
      );
      setEditingId(null);
    } else {
      setRoutines([
        ...routines,
        { id: Date.now(), ...newRoutine, completed: false },
      ]);
    }

    setNewRoutine({
      subject: "",
      type: "Theory",
      startHour: "",
      startMinute: "",
      startPeriod: "AM",
      endHour: "",
      endMinute: "",
      endPeriod: "AM",
      priority: "Normal",
      completed: false,
    });
  };

  const toggleCompleted = (id) => {
    setRoutines(
      routines.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  };

  const handleEdit = (routine) => {
    setNewRoutine({ ...routine });
    setEditingId(routine.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setRoutines(routines.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
          <FontAwesomeIcon icon={faBook} />
          Study Routine
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
        >
          <FontAwesomeIcon icon={showForm ? faMinus : faPlus} />
          {showForm ? "Close" : "Add Routine"}
        </button>
      </div>

      {/* Add Routine Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg mb-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Subject */}
              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Subject Name
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter subject name"
                  value={newRoutine.subject}
                  onChange={(e) =>
                    setNewRoutine({ ...newRoutine, subject: e.target.value })
                  }
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              {/* Type */}
              <div className="flex flex-col">
                <label
                  htmlFor="type"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Class Type
                </label>
                <select
                  id="type"
                  value={newRoutine.type}
                  onChange={(e) =>
                    setNewRoutine({ ...newRoutine, type: e.target.value })
                  }
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                >
                  <option>Theory</option>
                  <option>Lab</option>
                  <option>Assignment</option>
                </select>
              </div>

              {/* Start Time */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="HH"
                    min="1"
                    max="12"
                    value={newRoutine.startHour}
                    onChange={(e) =>
                      setNewRoutine({
                        ...newRoutine,
                        startHour: e.target.value,
                      })
                    }
                    className="border rounded-lg p-2 w-16 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  :
                  <input
                    type="number"
                    placeholder="MM"
                    min="0"
                    max="59"
                    value={newRoutine.startMinute}
                    onChange={(e) =>
                      setNewRoutine({
                        ...newRoutine,
                        startMinute: e.target.value,
                      })
                    }
                    className="border rounded-lg p-2 w-16 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  <select
                    value={newRoutine.startPeriod}
                    onChange={(e) =>
                      setNewRoutine({
                        ...newRoutine,
                        startPeriod: e.target.value,
                      })
                    }
                    className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              {/* End Time */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="HH"
                    min="1"
                    max="12"
                    value={newRoutine.endHour}
                    onChange={(e) =>
                      setNewRoutine({ ...newRoutine, endHour: e.target.value })
                    }
                    className="border rounded-lg p-2 w-16 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  :
                  <input
                    type="number"
                    placeholder="MM"
                    min="0"
                    max="59"
                    value={newRoutine.endMinute}
                    onChange={(e) =>
                      setNewRoutine({
                        ...newRoutine,
                        endMinute: e.target.value,
                      })
                    }
                    className="border rounded-lg p-2 w-16 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                  <select
                    value={newRoutine.endPeriod}
                    onChange={(e) =>
                      setNewRoutine({
                        ...newRoutine,
                        endPeriod: e.target.value,
                      })
                    }
                    className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              {/* Priority */}
              <div className="flex flex-col">
                <label
                  htmlFor="priority"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  value={newRoutine.priority}
                  onChange={(e) =>
                    setNewRoutine({ ...newRoutine, priority: e.target.value })
                  }
                  className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                >
                  <option>Normal</option>
                  <option>High</option>
                  <option>Low</option>
                </select>
              </div>

              {/* Button */}
              <div className="flex items-end">
                <button
                  onClick={handleAddOrUpdate}
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  {editingId ? "Update Routine" : "Save Routine"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Routine List */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-indigo-700">
          <FontAwesomeIcon icon={faLayerGroup} /> Today's Schedule
        </h3>

        {routines.length === 0 ? (
          <p className="text-gray-500 text-sm">No routines added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-indigo-100 text-gray-700">
                  <th className="p-3 text-left">Subject</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Start</th>
                  <th className="p-3 text-left">End</th>
                  <th className="p-3 text-left">Priority</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {routines.map((routine) => (
                  <tr
                    key={routine.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td
                      className={`p-3 ${
                        routine.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {routine.subject}
                    </td>
                    <td className="p-3">{routine.type}</td>
                    <td className="p-3">
                      {routine.startHour}:{routine.startMinute}{" "}
                      {routine.startPeriod}
                    </td>
                    <td className="p-3">
                      {routine.endHour}:{routine.endMinute} {routine.endPeriod}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          routine.priority === "High"
                            ? "bg-red-100 text-red-700"
                            : routine.priority === "Low"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {routine.priority}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => toggleCompleted(routine.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          routine.completed
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {routine.completed ? "Done" : "Pending"}
                      </button>
                    </td>
                    <td className="p-3 text-center space-x-3">
                      <button
                        onClick={() => handleEdit(routine)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => handleDelete(routine.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Routine;
