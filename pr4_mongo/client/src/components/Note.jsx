import React from 'react';

function Note({ note, onDelete, onEdit }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{note.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{note.description}</p>
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">{note.tag}</span>
        <div className="flex gap-2">
          <span className="text-sm text-gray-400">{new Date(note.date).toLocaleDateString()}</span>
          <button onClick={() => onEdit(note)} className="text-blue-500 hover:text-blue-700">
            Edit
          </button>
          <button onClick={() => onDelete(note._id)} className="text-red-500 hover:text-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
