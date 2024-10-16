import React, { useState } from 'react';

const NoteItem = ({ note, deleteNote, editNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedNote, setEditedNote] = useState({ ...note });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editNote(note.id, editedNote.title, editedNote.description, editedNote.tag);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
    };

    if (isEditing) {
        return (
            <div className="max-w-sm mx-auto my-4 p-5 border rounded-lg shadow-md bg-white">
                <div className="flex flex-col">
                    <input
                        type="text"
                        name="title"
                        value={editedNote.title}
                        onChange={handleChange}
                        className="text-xl font-semibold mb-2 p-1 border rounded"
                    />
                    <textarea
                        name="description"
                        value={editedNote.description}
                        onChange={handleChange}
                        className="text-gray-700 mb-2 p-1 border rounded"
                    />
                    <input
                        type="text"
                        name="tag"
                        value={editedNote.tag}
                        onChange={handleChange}
                        className="text-gray-500 text-sm mb-4 p-1 border rounded"
                    />
                    <div className="flex justify-between">
                        <button 
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200" 
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button 
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200" 
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-sm mx-auto my-4 p-5 border rounded-lg shadow-md bg-white">
            <div className="flex flex-col">
                <h5 className="text-xl font-semibold mb-2">{note.title}</h5>
                <p className="text-gray-700 mb-2">{note.description}</p>
                <p className="text-gray-500 text-sm mb-4"><small>{note.tag}</small></p>
                <div className="flex justify-between">
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200" 
                        onClick={() => deleteNote(note.id)}
                    >
                        Delete
                    </button>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200" 
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;