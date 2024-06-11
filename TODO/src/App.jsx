import React, { useState } from 'react';

function App() {
  const [mainTask, setMainTask] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && desc) {
      setMainTask([...mainTask, { title, desc }]);
      setTitle('');
      setDesc('');
    }
  };

  const deleteHandler = (index) => {
    const newTasks = mainTask.filter((task, i) => i !== index);
    setMainTask(newTasks);
  };

  let renderTask = <h2 className="text-center text-gray-500">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-4 p-4 bg-gray-100 rounded shadow">
          <div className="w-2/3">
            <h5 className="text-xl font-semibold text-gray-700">{t.title}</h5>
            <p className="text-gray-600">{t.desc}</p>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-200 flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-6">MY-TODOLIST</h1>
      <form onSubmit={submitHandler} className="w-full max-w-md mb-6">
        <input
          type="text"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your task description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          ADD TASK
        </button>
      </form>
      <ul className="w-full max-w-md">
        {renderTask}
      </ul>
    </div>
  );
}

export default App;
