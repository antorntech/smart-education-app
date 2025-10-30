import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheckCircle,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Routine = () => {
  const [routines, setRoutines] = useState([
    {
      id: 1,
      subject: "Mathematics",
      time: "9:00 AM - 10:00 AM",
      completed: false,
    },
    { id: 2, subject: "Physics", time: "10:15 AM - 11:15 AM", completed: true },
    { id: 3, subject: "English", time: "12:00 PM - 1:00 PM", completed: false },
  ]);

  const [newRoutine, setNewRoutine] = useState({ subject: "", time: "" });

  const handleAddRoutine = () => {
    if (!newRoutine.subject || !newRoutine.time) return;
    setRoutines([
      ...routines,
      {
        id: Date.now(),
        subject: newRoutine.subject,
        time: newRoutine.time,
        completed: false,
      },
    ]);
    setNewRoutine({ subject: "", time: "" });
  };

  const toggleCompleted = (id) => {
    setRoutines(
      routines.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">📘 Study Routine</h2>

      {/* Add Routine Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faPlus} className="text-indigo-600" /> Add New
          Routine
        </h3>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter subject name"
            value={newRoutine.subject}
            onChange={(e) =>
              setNewRoutine({ ...newRoutine, subject: e.target.value })
            }
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="Enter study time (e.g., 3:00 PM - 4:00 PM)"
            value={newRoutine.time}
            onChange={(e) =>
              setNewRoutine({ ...newRoutine, time: e.target.value })
            }
            className="border rounded-md p-2 w-full focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAddRoutine}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </div>

      {/* Routine List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faBook} className="text-indigo-600" /> Today's
          Schedule
        </h3>

        {routines.length === 0 ? (
          <p className="text-gray-500 text-sm">No routines added yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-100 text-gray-700 text-sm">
                <th className="p-2 text-left">Subject</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {routines.map((routine) => (
                <tr
                  key={routine.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td
                    className={`p-2 ${
                      routine.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {routine.subject}
                  </td>
                  <td
                    className={`p-2 ${
                      routine.completed ? "text-gray-400" : ""
                    }`}
                  >
                    {routine.time}
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => toggleCompleted(routine.id)}
                      className={`text-sm font-medium flex items-center justify-center gap-2 px-3 py-1 rounded-md ${
                        routine.completed
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                      {routine.completed ? "Completed" : "Pending"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Routine;
